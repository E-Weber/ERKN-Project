let data;

function bahold() {
    let BA = data.map(row=>{
        return {x: data.columns.slice(1,16), y: Object.values(row).slice(0,15), type:'scatter'
        }
        });
    Plotly.newPlot('line',BA, layout);
}
//var config = {responsive : true}

var layout = {
    autosize: false,
    showlegend:false,
    width: 1700,
    height: 1000,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    },
}


d3.csv('BA_Hold_25_44.csv').then(d=>{data=d; bahold();});