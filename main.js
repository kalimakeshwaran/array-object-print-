let a=[
    {
        brand:"audi",
        model:"2012",
        color:"red"
    },
    {
        brand:"xylo",
        model:"2013",
        color:"white"
    },
    {
        brand:"BMW",
        model:"2014",
        color:"green"
    },
    {
        brand:"jaquar",
        model:"2015",
        color:"blue"
    },
    {
        brand:"fortunor",
        model:"2016",
        color:"violet"
    }
]

console.log(a)
a.map(function(cars){
    console.log(cars.brand);
})

