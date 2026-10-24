import numpy as np, json, wave, subprocess, sys
d=sys.argv[1]; OFF=float(sys.argv[2]) if len(sys.argv)>2 else 0.0
SR=48000
TL=json.load(open(f'{d}/tl.json')); T=TL['END']; N=int(SR*(T+0.3))
def load(path):
    raw=subprocess.run(['ffmpeg','-v','error','-i',path,'-f','s16le','-ac','1','-ar',str(SR),'-'],capture_output=True,check=True).stdout
    return np.frombuffer(raw,'<i2').astype(np.float32)/32768
def place(buf,x,t,g=1.0):
    i=int(t*SR)
    if i>=len(buf) or i<0: return
    n=min(len(x),len(buf)-i); buf[i:i+n]+=x[:n]*g
voice=np.zeros(N)
for k,t in enumerate(TL['VS']): place(voice,load(f'{d}/snd/v{k}.wav'),t)
fx=np.zeros(N); S={}
for t,typ,g in TL['SFX']:
    if typ not in S: S[typ]=load(f'snd/{typ}.mp3'); S[typ]/=max(1e-6,np.abs(S[typ]).max())
    place(fx,S[typ],t,g)
bg=load('bgm/01b.wav')[int(OFF*SR):][:N]; bg=np.pad(bg,(0,N-len(bg)))
fl=int(SR*1.2); bg[-fl:]*=np.linspace(1,0,fl); bg/=np.abs(bg).max()/0.9
def wr(name,x):
    x=np.clip(x,-1,1); w=wave.open(name,'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((x*32767).astype('<i2').tobytes()); w.close()
wr(f'{d}/snd/voice.wav',voice); wr(f'{d}/snd/bgm.wav',bg); wr(f'{d}/snd/sfx.wav',fx*0.9)
subprocess.run(['ffmpeg','-y','-v','error','-i',f'{d}/snd/voice.wav','-i',f'{d}/snd/bgm.wav','-i',f'{d}/snd/sfx.wav','-filter_complex',
 '[0]volume=1.0,asplit=2[v][vsc];[1]volume=0.3[b];[b][vsc]sidechaincompress=threshold=0.03:ratio=6:attack=15:release=250[bd];[2]volume=0.4[s];[v][bd][s]amix=inputs=3:normalize=0,loudnorm=I=-14:TP=-1.5:LRA=11[o]',
 '-map','[o]','-ar','48000','-ac','2',f'{d}/snd/mix.wav'],check=True)
print('mix ok',d,T)
