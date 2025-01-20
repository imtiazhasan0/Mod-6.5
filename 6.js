let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const checkfriend=(array)=>{
    let biggestname=array[0];
    for (let i = 0; i < array.length; i++) 
        {
            const element=array[i];
            if (element.length>biggestname.length) {
                biggestname=element;
            }
        }
        return biggestname;
}
const bigname=checkfriend(friends);
console.log(bigname);