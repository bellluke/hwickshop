import asyncio, sys, os, json
from playwright.async_api import async_playwright
d=sys.argv[1]; mode=sys.argv[2] if len(sys.argv)>2 else 'prev'
cfg=json.load(open(f'{d}/cfg.json')); tl=json.load(open(f'{d}/tl.json'))
if mode=='safe': cfg['showSafe']=True
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':1080,'height':1920})
        errs=[]; pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.add_init_script(f'window.CFG={json.dumps(cfg,ensure_ascii=False)};window.TLD={json.dumps(tl)};')
        await pg.goto('file:///home/claude/hwick/shorts/rank2.html'); await pg.wait_for_timeout(800)
        if mode in ('prev','safe'):
            os.makedirs(f'{d}/prev',exist_ok=True)
            ts=[1.8,tl['TA']+1.2,tl['CS'][0]+2,tl['CS'][1]+2,tl['CS'][2]+2.2,tl['TD']+2.6,tl['TE']+2.4]
            for k,t in enumerate(ts):
                await pg.evaluate(f'renderAt({t})'); await pg.wait_for_timeout(150); await pg.screenshot(path=f'{d}/prev/{k}.png')
        else:
            os.makedirs(f'{d}/frames',exist_ok=True)
            n=int(tl['END']*30)
            for i in range(n):
                await pg.evaluate(f'renderAt({i/30})')
                if i%10==0: await pg.wait_for_timeout(20)
                await pg.screenshot(path=f'{d}/frames/{i:04d}.png')
        print(d,'errors',errs); await b.close()
asyncio.run(main())
