new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});

        if(destination.index === 1){
            const yogas = document.querySelectorAll('.yoga')
            const description = document.querySelector('.description');

            tl.fromTo(yogas, 0.7, {x: '100%'}, {x: '-30%'})
            .fromTo(description, 0.5, { y: "50", opacity: 0}, { y: 0, opacity: 1})
            .fromTo(yogas[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(yogas[1], 1, {opacity: 0}, {opacity: 1})
            .fromTo(yogas[2], 1, {opacity: 0}, {opacity: 1});
        }
    }
});