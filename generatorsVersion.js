const json = require('./foodyo_output.json');

json.body.Recommendations.forEach(res => {
console.log(res.RestaurantName);
res.menu.forEach(m => {
if(m.type === 'sectionheader'){
m.children.forEach(child1 => {
if(child1.type === 'item'){
if(child1.selected === 1){
console.log('-->', child1.name);
child1.children.forEach(child2 => {
    if(child2.selected === 1){
        console.log('----->', child2.name);
        function *loopOver(children){
            yield* children;
        }
        const it = loopOver(child2.children);
        for (const i of it) {
            if(i.selected === 1){
                console.log('---------->', i.name);
            }
        }
    }
})
}
}
})
}
});
});