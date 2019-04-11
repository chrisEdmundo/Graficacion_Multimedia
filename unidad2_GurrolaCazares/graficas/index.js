$(document).ready(function(){
    var ctx= document.getElementById("myChart");
    var myChart = new Chart(ctx,{
        type:'bar',
        data:{
            labels:["ansiedad","abuso de sustancias","depresion","fobias"],
            datasets:[{
                label:'Trastornos mas frecuentes por porcentaje',
                data:[14.3,9.2,9.1,7.1],
                backgroundColor:["MidnightBlue","DarkBlue","MediumBlue","RoyalBlue"]
            }]
        }
    });
    
    var lineas=document.getElementById("myChartlinas");
    var myChart = new Chart(lineas,{
        type:'line',
        data:{
            labels:["1990","1995","2000","2005","2010","2015"],
            datasets:[{
                label:'Tasa de suicidios (por cada 100mil habitantes)',
            data:[2.4,3.2,3.6,4.2,4.4,5.4],
            fill:true,
            borderColor:"Black",
            backgroundColor: 'Blue',
            lineTension: 0.8,
            pointBackgroundColor:('white')
        }]
        }
    });
    var radar = document.getElementById("myChartRadar");
    var myChart = new Chart(radar,{
        type:'radar',
        data:{
            labels:["1990","1995","2000","2005","2010","2015"],
            datasets:[{
                label:'Hombres(%)',
            data:[86,81,85,81,83,79],
            
            backgroundColor: 'rgba(123, 104, 238, 0.75)',
            lineTension: 0.5,
            pointBackgroundColor:('black')
        },
        {
                label:'Mujeres(%)',
            data:[14,19,15,19,17,21],
            
            backgroundColor: 'rgba(153, 50, 204, 0.75)',
            lineTension: 0.5,
            pointBackgroundColor:('black')
        }]
                            
        }
        
        
    });
    
    var pie = document.getElementById("myChartpie");
    var myChart = new Chart(pie,{
        type: 'pie',
        data: {
             labels:["Ahorcamiento","Arma de fuego","Envenenamiento","Arma blanca","Otros"],
            datasets:[{
                label:'Formas de suicidio',
            data:[81,9,8,1,1],
            
            backgroundColor:[
            'rgba(75, 0, 130, 0.75)',
            'rgba(128, 0, 128, 0.75)',
            'rgba(139, 0, 139, 0.75)',
            'rgba(153, 50, 204, 0.75)',
            'rgba(148, 0, 211, 0.75)',
            'rgba(106, 90, 205, 0.75)'
            
            ],
            lineTension: 0.5,
            pointBackgroundColor:('rgba(255,100,55, 0.85)'),
            
        }]
    }
                            
    });
    
    var polar= document.getElementById("myChartPolar");
    var myChart = new Chart(polar,{
        
       type: 'polarArea',
        data: {
             labels:["Familia o amigos","sacerdotes y ministros","se automedican"],
            datasets:[{
                label:'¿Como solicitan ayuda?',
            data:[54,10,15],
            
            backgroundColor:[
                'rgba(75, 0, 130, 0.75)',
                'rgba(139, 0, 139, 0.75)',
                'rgba(148, 0, 211, 0.75)'
            
            ],
            lineTension: 0.5,
            pointBackgroundColor:('rgba(255,100,55, 0.85)'),
            
        }]
    }
        
    });
    
    
    var dona= document.getElementById("myChartDona");
    var myChart = new Chart(dona,{
        
                type: 'doughnut',
        data: {
             labels:["0 a 14","15 a 29","30 a 44","45 a 59","60 a 74","mas de 75"],
            datasets:[{
                label:'tasa de suicidios por edad',
            data:[0.8,8.7,7.3,5.3,5.1,6.8],
            
            backgroundColor:[
            'rgba(25, 25, 112,0.75)',
            'rgba(139, 0, 139, 0.75)',
            'rgba(0, 0, 128, 0.75)',
            'rgba(128, 0, 128, 0.75)',
            'rgba(0, 0, 139, 0.75)',
            'rgba(75, 0, 130, 0.75)',
            
            ],
            borderColor:[
                'rgba(25, 25, 112,0.75)',
                'rgba(139, 0, 139, 0.75)',
                'rgba(0, 0, 128, 0.75)',
                'rgba(128, 0, 128, 0.75)',
                'rgba(0, 0, 139, 0.75)',
                'rgba(75, 0, 130, 0.75)',
            ]
           ,
            borderWidth:[
            
            'rgba(55,225,68, 0.75)',
            'rgba(48,66,161, 0.75)',
            'rgba(243,225,68, 0.75)',
            'rgba(224,184,128, 0.75)',
            'rgba(120,225,243, 0.75)',
            'rgba(243,242,120, 0.75)',
            ]
            
        }]
    }
        
    });
    
        var bubble= document.getElementById("myChartBubble");
        var myChart = new Chart(bubble,{

           type: 'bubble',
            data: {
            datasets:[{
                label:'por porcentaje',
                data:[{"x":1990,"y":45,"r":15},{"x":2000,"y":50,"r":12},{"x":2015,"y":42,"r":10}],

                backgroundColor:[ 'rgba(0, 0, 80, 0.75)','rgba(0, 0, 180, 0.75)', 'rgba( 0, 0, 255, 0.75)'],
              
            }]
        }
        
    });
    
                            
      
        
});