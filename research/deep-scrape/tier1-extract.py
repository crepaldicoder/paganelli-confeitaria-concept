import csv, json, pathlib, re, urllib.request
ROOT=pathlib.Path('/opt/data/tier1-research/repos')
rows=[]
configs={
 'Magic UI':(ROOT/'magicui/apps/www/public/r/registry.json','https://magicui.design/docs/components/{}','https://magicui.design/r/{}.json'),
 'React Bits':(ROOT/'react-bits/public/r/registry.json','https://reactbits.dev/{}','https://reactbits.dev/r/{}.json'),
 'Cult UI':(ROOT/'cult-ui/apps/www/public/r/registry.json','https://cult-ui.com/docs/components/{}','https://cult-ui.com/r/{}.json'),
 'Eldora UI':(ROOT/'eldoraui/apps/www/public/r/registry.json','https://eldoraui.site/docs/components/{}','https://eldoraui.site/r/{}.json')}
for source,(path,doc_tpl,json_tpl) in configs.items():
 d=json.load(open(path));
 for x in d['items']:
  name=x['name']; title=x.get('title') or name.replace('-',' ').title()
  desc=x.get('description','')
  deps=x.get('dependencies',[])+x.get('devDependencies',[])
  reg=x.get('registryDependencies',[])
  if source=='React Bits':
   # registry names carry implementation variants; component route is encoded in local metadata elsewhere
   base=re.sub(r'-(JS|TS)-(CSS|TW)$','',name,flags=re.I)
   doc_tpl2='https://reactbits.dev/'+base
   doc=doc_tpl2
  else: doc=doc_tpl.format(name)
  rows.append({'source':source,'id':name,'name':title,'description':desc,'type':x.get('type',''),'dependencies':'; '.join(deps),'registry_dependencies':'; '.join(map(str,reg)),'official_url':doc,'registry_json':json_tpl.format(name),'files':'; '.join(f.get('path','') for f in x.get('files',[]))})
# Aceternity docs are proprietary/site-served rather than a complete public registry.
req=urllib.request.Request('https://ui.aceternity.com/components',headers={'User-Agent':'Mozilla/5.0'})
html=urllib.request.urlopen(req,timeout=60).read().decode('utf8','ignore')
hrefs=sorted(set(re.findall(r'href=["\'](/components/[^"\'#?]+)',html)))
for href in hrefs:
 name=href.rstrip('/').split('/')[-1]
 if name in {'components'}: continue
 rows.append({'source':'Aceternity UI','id':name,'name':name.replace('-',' ').title(),'description':'','type':'docs component','dependencies':'site code tab; verify per component','registry_dependencies':'','official_url':'https://ui.aceternity.com'+href,'registry_json':'not publicly exposed as complete registry','files':''})
rows.sort(key=lambda r:(r['source'],r['id']))
out=pathlib.Path('/opt/data/tier1-research/tier1_registry_inventory.csv')
with out.open('w',newline='',encoding='utf8') as f:
 w=csv.DictWriter(f,fieldnames=rows[0].keys());w.writeheader();w.writerows(rows)
print(json.dumps({'total':len(rows),'by_source':{s:sum(r['source']==s for r in rows) for s in sorted(set(r['source'] for r in rows))},'aceternity_links':len(hrefs)},indent=2))
