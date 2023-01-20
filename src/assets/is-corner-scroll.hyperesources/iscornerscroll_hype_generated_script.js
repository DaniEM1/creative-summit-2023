//	HYPE.documents["is-corner-scroll"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="is-corner-scroll.hyperesources",f="is-corner-scroll",g="iscornerscroll_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/iscornerscroll_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_748F||null!=window.HYPE_dtl_748F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-748.full.min.js":"HYPE-748.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_748"+c,"HYPE_dtl_748"+c,a,d),false==!0&&(a=a||k("HYPE_w_748","HYPE_wdtl_748","HYPE-748.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_748","HYPE-748.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"start",source:"function(hypeDocument, element, event) {ggStart();}",identifier:"173"},{name:"finish",source:"function(hypeDocument, element, event) {\tggFinish();\n\t\n\t}",identifier:"174"},{name:"blendmodes",source:"function(hypeDocument, element, event) {\t\n\tvar blendmodes = ['color', 'color-burn', 'color-dodge', 'darken', 'difference', 'exclusion', 'hard-light', 'hue', 'lighten', 'luminosity', 'multiply', 'normal', 'overlay', 'saturation', 'screen', 'soft-light'];\n\twhile (blendmodes.length) {\n\t\tvar blendmode = blendmodes.pop();\n\t\tvar nodes = element.querySelectorAll('.blendmode-'+blendmode);\n\t\tfor (i = 0; i < nodes.length; ++i) {\n\t\t\tnodes[i].parentNode.style.mixBlendMode = blendmode;\n\t\t}\n\t}\n\t\t\n\t\n}",identifier:"2190"},{name:"openAd",source:"function(hypeDocument, element, event) {\twindow.openAd(event);\n}",identifier:"3170"},{name:"expand",source:"function(hypeDocument, element, event) {\t\t\n\tggExpand();\n}",identifier:"3171"},{name:"collapse",source:"function(hypeDocument, element, event) {\t\n\tggCollapse();\n}",identifier:"3172"},{name:"set600",source:"function(hypeDocument, element, event) {\twindow.adSize = 600;\n\tggInitVideo();\t\n}",identifier:"3769"},{name:"set300",source:"function(hypeDocument, element, event) {\twindow.adSize = 300;\n\tggInitVideo();\t\n}",identifier:"3770"},{name:"checkSceneTime",source:"function(hypeDocument, element, event) {\tvar currentPosition = hypeDocument.currentTimeInTimelineNamed('Main Timeline');\n\tconsole.log(currentPosition);\n\tif(currentPosition < 4) {\n\t\tconsole.log('move to ready position');\n\t\thypeDocument.goToTimeInTimelineNamed(4, 'Main Timeline')\n\t} else {\n\t\tconsole.log('no adjustment needed');\n\t}\n}",identifier:"3772"},{name:"_stopAnim",source:"function(hypeDocument, element, event) {\t\tstopAnim();\n}",identifier:"652"},{name:"scrollUnit",source:"function(hypeDocument, element, event) {\tscrollUnit(0, 'Scroll Timeline', 1, hypeDocument, element, event);\n}",identifier:"5784"},{name:"triggerPulse",source:"function(hypeDocument, element, event) {\twindow.pulseTimeout = setTimeout(function () {\n\t\tvar pulse = hypeDocument.getSymbolInstanceById('pulse-instance');\n\t\tpulse.startTimelineNamed('pulse-animation', hypeDocument.kDirectionForward);\n\t}, 1000);\n\n\t\n}",identifier:"6729"},{name:"tuneIn",source:"function(hypeDocument, element, event) {\t\t\n\t\tvar now = Date.now();\n\tvar dateSwap = [\n\t\t{\n\t\t\n\t\t//date format is => year-month-day(remmeber zero's before the months(ex -> 01) and days(ex -> 03))\n\t\t\tstart: new Date('2022-07-20T00:00'),\n\t\t\tend: new Date('2022-08-09T00:00'),\n\t\t\telements: ['.cta-01', '.tunein-01' ] //you can remove 'cta-01', (don't forget to remove the comma too) from this line if your unit does not require a cta swap\n\t\t},\n\t\t{\n\t\t\tstart: new Date('2022-08-10T00:00'),\n\t\t\tend: new Date('2022-08-14T00:00'),\n\t\t\telements: ['.cta-02', '.tunein-02']\n\t\t},\n\t\t{\n\t\t\tstart: new Date('2022-09-14T00:00'),\n\t\t\tend: new Date('2022-10-18T00:00'),\n\t\t\telements: ['.cta-03', '.tunein-03']\n\t\t}\n\t\t\n\t\t//copy and paste from the ,{ to the } to add another tune-in\n\t];\n\t\n\t//PLEASE DON'T CHANGE ANYTHING BEYONG THIS LINE-----------------!\n  \n\n\tif(now < dateSwap[0].start) {\n\t\t//default to earliest message\n\t\tsetMessaging(dateSwap[0]);\n\t} \n\t\n\tif(now > dateSwap[dateSwap.length-1].end) {\n\t\t//default to last message\n\t\tsetMessaging(dateSwap[dateSwap.length-1]);\n\t}\n\t  \n\t   \n\tfor(var i=0; i<dateSwap.length; i++) {\n\t\tvar d = dateSwap[i];\n\t\tif(now > d.start && now < d.end) {\n\t\t\tsetMessaging(d);\n\t\t\tbreak;\n\t\t}\n\t}\n\t\n\tfunction setMessaging(object) {\n\t\tconsole.log('set messaging:');\n\t\tfor(var q=0;q<object.elements.length; q++) {\n\t\t\tvar els = document.querySelectorAll(object.elements[q]);\n\t\t\tfor(var g =0; g<els.length; g++) {\n\t\t\t\tels[g].style.display = 'block';\n\t\t\t}\n\t\t}\n\t}\n}",identifier:"7156"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_748"+c](f,g,{"10":{p:1,n:"Group%201_2x.png",g:"7930",o:true,t:"@2x"},"2":{p:1,n:"Clubman%20Front%20Wheel_2x.png",g:"7816",o:true,t:"@2x"},"-2":{n:"blank.gif"},"3":{p:1,n:"Clubman%20Rear%20Wheel.png",g:"7818",o:true,t:"@1x"},"4":{p:1,n:"Clubman%20Rear%20Wheel_2x.png",g:"7818",o:true,t:"@2x"},"5":{p:1,n:"CTA_Find%20a%20Dealer%20Today.png",g:"7835",o:true,t:"@1x"},"6":{p:1,n:"CTA_Find%20a%20Dealer%20Today_2x.png",g:"7835",o:true,t:"@2x"},"7":{p:1,n:"Layer%2015.png",g:"7840",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"0":{p:1,n:"Motortober_Transparent_Clubman.png",g:"7814",t:"@1x"},"8":{p:1,n:"Layer%2015_2x.png",g:"7840",o:true,t:"@2x"},"1":{p:1,n:"Clubman%20Front%20Wheel.png",g:"7816",o:true,t:"@1x"},"9":{p:1,n:"Group%201.png",g:"7930",o:true,t:"@1x"}},
l,[],e,[{n:"is-corner-scroll",o:"3351",X:[0]}],[{p:"600px",U:{},c:"#F3F3F3",bZ:180,d:200,cA:false,K:{a:[{p:10,y:false,c:1,A:0,K:1,symbolOid:"3465",b:"3488"}]},Y:200,L:[],Z:200,v:{"8021":{h:"7930",p:"no-repeat",x:"visible",a:-563,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"8015",b:8,d:160,k:"div",c:1326},"8037":{c:75,d:60,I:"Solid",e:0.8,J:"Solid",K:"Solid",L:"Solid",M:0,bF:"8034",N:0,A:"#000",x:"visible",j:"absolute",B:"#000",O:0,P:0,C:"#000",z:1,l:90,D:"#000",m:"#205C66",k:"div",n:"#272727",a:375,b:100},"8026":{h:"7814",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"8025",dB:"img",d:149,k:"div",cQ:0.88,c:382,cR:0.88},"8015":{x:"hidden",g:"",k:"div",c:200,d:130,z:1,a:0,j:"absolute",bF:"8014",b:173},"8030":{b:20,c:300,cP:"cursor_pointer",bS:269,d:80,r:"none",I:"None",e:1,J:"None",cQ:1,K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,j:"absolute",x:"visible",O:0,B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:23,k:"div",D:"#D8DDE4",tX:1,a:300,tY:0.51},"8035":{c:75,d:60,I:"Solid",e:0.8,J:"Solid",K:"Solid",L:"Solid",M:0,bF:"8034",N:0,A:"#000",x:"visible",j:"absolute",B:"#000",O:0,P:0,C:"#000",z:3,l:90,D:"#000",m:"#272727",k:"div",n:"#025D3B",a:0,b:100},"8024":{c:200,d:129,r:"none",I:"Solid",e:1,J:"Solid",K:"Solid",L:"Solid",M:0,bF:"8015",N:0,A:"#15EBFF",x:"visible",j:"absolute",B:"#15EBFF",O:0,P:0,C:"#15EBFF",z:1,l:45,D:"#15EBFF",m:"#00CE7C",k:"div",n:"#4AC1E0",a:0,b:39},"8013":{x:"visible",k:"div",c:200,d:100,z:8,r:"inline",a:0,bS:9,j:"absolute",b:100},"8029":{b:120,c:300,cP:"cursor_pointer",bS:269,d:80,r:"none",I:"None",e:1,J:"None",cQ:1,K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,j:"absolute",O:0,x:"visible",B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:25,k:"div",D:"#D8DDE4",aC:{a:[{b:"3490",p:8,z:true,symbolOid:"2056",J:false}]},tX:1,a:300,aD:{a:[{b:"3490",p:8,z:false,symbolOid:"2056",J:false}]},tY:0.51},"8018":{x:"visible",cQ:0,k:"div",cR:0,c:85,d:17,z:1,a:32,bF:"8016",j:"absolute",b:36},"8033":{b:40,c:900,cP:"cursor_pointer",bS:271,d:60,r:"none",I:"None",e:1,J:"None",cQ:1,K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,j:"absolute",x:"visible",O:0,B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:22,k:"div",D:"#D8DDE4",tX:1,a:0,tY:0.51},"8022":{h:"7930",p:"no-repeat",x:"visible",a:-2452,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,bF:"8015",b:8,d:160,k:"div",c:1326},"8038":{b:140,c:900,cP:"cursor_pointer",bS:271,d:60,r:"none",I:"None",e:1,J:"None",cQ:1,K:"None",L:"None",aP:"pointer",M:0,w:"",N:0,j:"absolute",O:0,x:"visible",B:"#D8DDE4",P:0,A:"#D8DDE4",C:"#D8DDE4",z:24,k:"div",D:"#D8DDE4",aC:{a:[{b:"3490",p:8,z:true,symbolOid:"2056",J:false}]},tX:1,a:0,aD:{a:[{b:"3490",p:8,z:false,symbolOid:"2056",J:false}]},tY:0.51},"8027":{h:"7816",p:"no-repeat",x:"visible",a:40,q:"100% 100%",b:57,j:"absolute",r:"inline",z:2,bF:"8025",dB:"img",d:78,k:"div",cQ:0.51,c:80,f:0,cR:0.51},"8016":{x:"visible",cQ:1,k:"div",cR:1,c:150,d:53,z:6,a:24,bF:"8015",j:"absolute",b:62},"8031":{x:"visible",k:"div",c:900,d:0,z:5,r:"none",a:0,bS:15,j:"absolute",b:100},"8020":{h:"7835",p:"no-repeat",x:"visible",a:-82,q:"100% 100%",b:-4,j:"absolute",r:"inline",bF:"8018",z:2,dB:"img",d:26,k:"div",cQ:0.3,e:1,c:249,cR:0.3},"8036":{c:300,d:60,I:"Solid",e:0.8,J:"Solid",K:"Solid",L:"Solid",M:0,bF:"8034",N:0,A:"#000",x:"visible",j:"absolute",B:"#000",O:0,P:0,C:"#000",z:2,l:90,D:"#000",m:"#025D3B",k:"div",n:"#205C66",a:75,b:100},"8025":{x:"visible",cQ:0.6,k:"div",cR:0.6,c:382,d:149,z:5,a:250,bF:"8015",j:"absolute",b:-31},"8014":{x:"visible",k:"div",c:200,d:129,z:5,a:0,j:"absolute",bF:"8013",b:-29},"8019":{b:0,c:86,d:17,r:"inline",I:"Solid",cQ:1,J:"Solid",K:"Solid",g:"#9B192F",L:"Solid",M:0,bF:"8018",N:0,A:"#FFF",j:"absolute",x:"visible",B:"#FFF",P:0,O:0,C:"#FFF",z:1,k:"div",D:"#FFF",tX:1.06,a:-1,tY:0.47},"8034":{cN:"none",x:"visible",a:225,bS:13,b:40,j:"absolute",r:"none",c:450,k:"div",z:6,d:60,aP:"auto"},"8023":{h:"7930",p:"no-repeat",x:"visible",a:-563,q:"100% 100%",b:8,j:"absolute",r:"none",z:4,bF:"8015",dB:"img",d:160,k:"div",c:1326,e:0.28060662},"8028":{h:"7818",p:"no-repeat",x:"visible",a:252,q:"100% 100%",b:57,j:"absolute",r:"inline",z:3,bF:"8025",dB:"img",d:78,k:"div",cQ:0.5,c:80,f:0,cR:0.5},"8017":{h:"7840",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:2,bF:"8016",dB:"img",d:29,k:"div",c:150,e:0},"8032":{c:900,bS:271,d:60,I:"Solid",J:"Solid",K:"Solid",g:"#282828",L:"Solid",M:0,bF:"8031",N:0,A:"#15EBFF",j:"absolute",x:"visible",B:"#15EBFF",P:0,O:0,C:"#15EBFF",z:1,k:"div",D:"#15EBFF",a:0,b:40}},A:{a:[{p:4,h:"2190"}]},O:["8030","8026","8025","8033","8032","8035","8034","8036","8037","8015","8014","8022","8023","8021","8027","8013","8031","8028","8024","8029","8017","8016","8038","8020","8019","8018"],"_":0,bY:1,n:"300",a:100,o:"3491",T:{"3488":{q:false,z:10,i:"3488",n:"Scroll Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:7,b:"3488",symbolOid:"3465"}]},o:"3488"},{f:"c",y:0,z:0.2,i:"b",e:5,s:-95,o:"8024"},{f:"b",y:0,z:10,i:"f",e:-7200,s:-360,o:"8027"},{f:"b",y:0,z:10,i:"f",e:-7200,s:-360,o:"8028"},{f:"b",y:0,z:5,i:"a",e:201,s:-1126,o:"8021"},{y:0,i:"a",s:-563,z:0,o:"8023",f:"c"},{f:"b",y:0,z:5,i:"a",e:-1125,s:-2452,o:"8022"},{y:0.2,i:"b",s:5,z:0,o:"8024",f:"c"},{y:5,i:"a",s:201,z:0,o:"8021",f:"c"},{f:"c",y:5,z:5,i:"a",e:0,s:-1125,o:"8022"},{y:10,i:"f",s:-7200,z:0,o:"8027",f:"c"},{y:10,i:"f",s:-7200,z:0,o:"8028",f:"c"},{y:10,i:"a",s:0,z:0,o:"8022",f:"c"}],f:30,b:[]},"3490":{q:false,z:0,i:"3490",n:"Rollover A",a:[],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0.28,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"279",p:7},{p:4,h:"5784"}]},s:{a:[{p:4,h:"173"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:0.2,i:"b",e:-60,s:40,o:"8032"},{f:"c",y:0,z:0.2,i:"b",e:-1,s:173,o:"8015"},{f:"7977",y:0,z:0.24,i:"a",e:-85,s:250,o:"8025"},{f:"230",y:0,z:0.25,i:"f",e:-360,s:0,o:"8028"},{f:"230",y:0,z:0.25,i:"f",e:-360,s:0,o:"8027"},{f:"c",y:0,z:0.2,i:"b",e:0,s:100,o:"8037"},{f:"c",y:0,z:0.2,i:"b",e:0,s:100,o:"8035"},{f:"c",y:0,z:0.2,i:"b",e:0,s:100,o:"8036"},{f:"c",y:0.07,z:0.17,i:"e",e:1,s:0,o:"8017"},{f:"h",y:0.19,z:0.09,i:"cQ",e:1.2,s:0,o:"8018"},{f:"h",y:0.19,z:0.09,i:"cR",e:1.2,s:0,o:"8018"},{y:0.2,i:"b",s:-1,z:0,o:"8015",f:"c"},{y:0.2,i:"b",s:0,z:0,o:"8037",f:"c"},{y:0.2,i:"b",s:0,z:0,o:"8035",f:"c"},{y:0.2,i:"b",s:0,z:0,o:"8036",f:"c"},{y:0.2,i:"b",s:-60,z:0,o:"8032",f:"c"},{y:0.24,i:"e",s:1,z:0,o:"8017",f:"c"},{y:0.24,i:"a",s:-85,z:0,o:"8025",f:"c"},{y:0.25,i:"f",s:-360,z:0,o:"8027",f:"c"},{y:0.25,i:"f",s:-360,z:0,o:"8028",f:"c"},{f:"c",p:2,y:0.28,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"279",p:7},{p:4,h:"5784"}]},o:"kTimelineDefaultIdentifier"},{y:0.28,i:"cQ",s:1.2,z:0,o:"8018",f:"c"},{y:0.28,i:"cR",s:1.2,z:0,o:"8018",f:"c"},{y:3,i:"a",s:0,z:0,o:"8024",f:"c"}],f:30,b:[]}},b:100}],{},h,{h:{p:0,q:[[0,0,0.175,0.885,0.32,1.25,1,1]]},"230":{p:0,q:[[0,0,0.2032,0,0.1956,1,1,1]]},"7977":{p:0,q:[[0,0,0.2032,0,0.21,1.0876,1,1]]}},null,false,false,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();