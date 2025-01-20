let multiples = [];
for (let i = 1; i <= 50; i++) 
{
    if (i % 3 === 0 && i % 5 === 0) {
        multiples.push(i);
    }
}
console.log(multiples);