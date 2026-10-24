import json,subprocess,sys,os
d=sys.argv[1]; os.makedirs(f'{d}/snd',exist_ok=True)
def dur(f): return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f],capture_output=True,text=True).stdout)
D=[]
for i in range(7):
    src=f'tts2/{d}/L{i}.mp3'; out=f'{d}/snd/v{i}.wav'
    subprocess.run(['ffmpeg','-y','-v','error','-i',src,'-af','silenceremove=start_periods=1:start_threshold=-45dB:stop_periods=-1:stop_threshold=-45dB:stop_duration=0.25,atempo=1.1','-ar','48000','-ac','1',out],check=True)
    D.append(dur(out))
TA=max(3.0,0.15+D[0]+0.35); TB=TA+max(3.6,0.15+D[1]+0.35)
CS=[];CD=[];t=TB
for i in range(3):
    CS.append(t); c=max(4.2,0.15+D[2+i]+0.5); CD.append(c); t+=c
TD=t; TE=TD+max(4.6,0.15+D[5]+0.6); END=TE+max(4.4,0.15+D[6]+1.4)
VS=[0.15,TA+0.15]+[c+0.15 for c in CS]+[TD+0.15,TE+0.15]
S=[[0.05,'impact',1],[0.4,'pop',.8],[1.1,'pop',.8],[TA-0.3,'whoosh',1],[TA+0.12,'impact',1],[TA+0.5,'pop',.7]]
for c in CS:
    S+=[[c-0.2,'whoosh',.7],[c+0.05,'impact',.9],[c+0.18,'pop',.7],[c+0.8,'cash',.6]]+[[c+0.6+k*0.18,'tick',.35] for k in range(6)]
S+=[[TD-0.2,'whoosh',.7],[TD+0.05,'pop',.8],[TD+0.6,'pop',.8],[TD+1.2,'ding',.6],[TE-0.3,'whoosh',1],[TE+0.1,'impact',1],[TE+0.6,'pop',.7],[TE+1.0,'impact',.8],[TE+1.4,'ding',.7]]
tl=dict(TA=TA,TB=TB,CS=CS,CD=CD,TD=TD,TE=TE,END=END,VS=VS,SFX=S,D=D)
json.dump(tl,open(f'{d}/tl.json','w'))
print(d,'END %.2f'%END,[round(x,2) for x in D])
