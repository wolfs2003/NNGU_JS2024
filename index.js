let start = 1800;
let end = 2020;
c = 0;
for(let i = end; i >= start; i-4){
    if (i == 1961) {
        console.log("количество итераций: " + (i- start));
    }
    console.log("количество високосных годов: " + i);
}
