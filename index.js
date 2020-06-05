function *loopOver(children){
    yield* children
}

const it = loopOver([1,2,3]);
for (const i of it) {
    console.log(i);
}