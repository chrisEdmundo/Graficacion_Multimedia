window.addEventListener("load",iniciar,"false");


function iniciar(){
    var paper=new Raphael('canvas',1350,600);
    var pasto=paper.rect(0,505,1350,100).attr('fill','green');
    //NUBES
    var c1= paper.circle(100,120,30).attr({'stroke':'black','stroke-width':'0','fill':'rgba(144,144,141,0.92)'});
    var c2= paper.circle(85,125,25).attr({'stroke':'black','stroke-width':'0','fill':'rgba(144,144,141,0.92)'});
    var c3= paper.circle(70,130,20).attr({'stroke':'black','stroke-width':'0','fill':'rgba(144,144,141,0.92)'});
    var c4= paper.circle(50,135,15).attr({'stroke':'black','stroke-width':'0','fill':'rgba(144,144,141,0.92)'});
    var c5= paper.circle(130,125,25).attr({'stroke':'black','stroke-width':'0','fill':'rgba(144,144,141,0.92)'});
    var c6= paper.circle(150,130,20).attr({'stroke':'black','stroke-width':'0','fill':'rgba(144,144,141,0.92)'});
    var nube1=paper.set(c1,c2,c3,c4,c5,c6).toFront();
    //LUNA
    var luna=paper.circle(1100,90,80).attr('fill','white').toFront();
    //MOLINO
    var rectPath = paper.path("M860,225 L800,510 L1000,510 L940,225 Z").attr('fill','white');
    var techo = paper.path("M900,105 L800,225 L1000,225 Z").attr('fill','white');
    var rect01 = paper.path("M1000,220 L800,320 L850,370 L950,170 Z").attr('fill','white');
    var rect02 = paper.path("M800,220 L1000,320 L950,370 L850,170 Z").attr('fill','white');
    var door=paper.rect(880,470,40,40).attr('fill','black');
    var top=paper.circle(900,270,40).attr('fill','rgb(128,128,128)');
    var molino=paper.set(rectPath,door,aspas,techo).toFront();
    var aspas=paper.set(rect01,rect02,top).toFront();
    //ARBOL
    var tronco=paper.rect(100,250,90,300).attr('fill','brown');
    var follaje=paper.circle(145,160,90).attr('fill','green');
    var corteza1=paper.path("M 150 260 L 160 270").attr({'fill':'black','stroke-width':'2'});
    var corteza2=paper.path("M 160 270 L 120 300").attr({'fill':'black','stroke-width':'2'}); 
    var corteza3=paper.path("M 120 300 L 155 500").attr({'fill':'black','stroke-width':'2'});
    var arbol=paper.set(tronco,follaje,corteza1,corteza2,corteza3).toFront();

    //ARBUSTO
    var a1=paper.circle(700,500,30).attr({'fill':'rgb(34,97,8)','stroke-width':'0','stroke':'rgb(34,97,8)'}).toFront();
    var a2=paper.circle(720,520,30).attr({'fill':'rgb(34,97,8)','stroke-width':'0','stroke':'rgb(34,97,8)'}).toFront();
    var a3=paper.circle(680,520,30).attr({'fill':'rgb(34,97,8)','stroke-width':'0','stroke':'rgb(34,97,8)'}).toFront();
    var a4=paper.circle(660,505,30).attr({'fill':'rgb(34,97,8)','stroke-width':'0','stroke':'rgb(34,97,8)'}).toFront();
    var a5=paper.circle(740,500,30).attr({'fill':'rgb(34,97,8)','stroke-width':'0','stroke':'rgb(34,97,8)'}).toFront();
    var m1=paper.circle(730,510,5).attr('fill','purple');
    var m2=paper.circle(720,515,5).attr('fill','purple');
    var m3=paper.circle(660,500,5).attr('fill','purple');
    var arbusto=paper.set(a1,a2,a3,a4,a5,m1,m2,m3).toFront();
    //CARRO
    var carro=paper.image('img/carro.png',0,330,640,320).toFront();
    var ll1=paper.circle(100,530,55).attr({'fill':'rgba(181,108,108,0.96)','stroke-width':'20','stroke':'#000'});
    var lh1=paper.path("M 50 535 L 150 535").attr({'fill':'rgb(197,206,208)','stroke-width':'8'}); 
    var lv1=paper.path("M 100 480 L 100 580").attr({'fill':'rgb(197,206,208)','stroke-width':'8'}); 
    var ll2=paper.circle(540,530,55).attr({'fill':'rgba(181,108,108,0.96)','stroke-width':'20','stroke':'#000'});
    var lh2=paper.path("M 490 535 L 590 535").attr({'fill':'rgb(197,206,208)','stroke-width':'8'}); 
    var lv2=paper.path("M 540 480 L 540 580").attr({'fill':'rgb(197,206,208)','stroke-width':'8'}); 
    var llanta1 =paper.set(ll1,lh1,lv1).toFront();
    var llanta2 =paper.set(ll2,lh2,lv2).toFront();
    var car = paper.set(carro,llanta1,llanta2);

    var llantas=paper.set(llanta1,llanta2);

    var EntradaCarro = function(){
        carro.animate({transform:'t1500,0'},10000,SalidaCarro);
    }
    var SalidaCarro = function(){
        carro.animate({transform:'t-800,0'},1,EntradaCarro);
    }
    var Giro = function(){
        llantas.animate({transform:'t1500,0,r1440'},10000,SalidaGiro);
    }
    var SalidaGiro = function(){
        llantas.animate({transform:'t-800,0'},1,Giro);
    }
    var EntradaArbol = function(){
        arbol.animate({transform:'t-1500,0'},10000,SalidaArbol);
    }
    var SalidaArbol = function(){
        arbol.animate({transform:'t1500,0'},1,EntradaArbol);
    }
    var EntradaArbusto = function(){
        arbusto.animate({transform:'t-1200,0'},10000,SalidaArbusto);
    }
    var SalidaArbusto = function(){
        arbusto.animate({transform:'t1500,0'},1,EntradaArbusto);
    }
    var EntradaNube = function(){
        nube1.animate({transform:'t-1200,0'},10000,SalidaNube);
    }
    var SalidaNube = function(){
        nube1.animate({transform:'t1500,0'},1,EntradaNube);
    }
    var EntradaMolino = function(){
        molino.animate({transform:'t-1200,0'},10000,SalidaMolino);
    }
    var SalidaMolino = function(){
        molino.animate({transform:'t1500,0'},1,EntradaMolino);
    }
    var GiroMolino = function(){
        aspas.animate({transform:'t-1200,0,r1020'},10000,SalidaGiroMolino);
    }
    var SalidaGiroMolino = function(){
        aspas.animate({transform:'t1500,0'},1,GiroMolino);
    }

    luna.click(function(){
        EntradaCarro();
        Giro();
        EntradaArbol();
        EntradaNube();
        EntradaArbusto();
        EntradaMolino();
        GiroMolino();
    })

}