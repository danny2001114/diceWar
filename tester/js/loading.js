window.addEventListener('load',()=> {
    loading_pack();
    loading_type_1();
})

function loading_pack() {
    document.querySelector('.loading-layer').innerHTML += `
        <div class="items-holder">
            <div class="truck"></div>
            <div class="rocket"></div>
            <div class="soldier"></div>
            <div class="land">
                <h1>
                    /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /
                </h1>
            </div>
        </div>
        <div>
            <span>Loading... 
                <span class="percentage">0</span>
                 %
            </span>
        </div>`;
}

function loading_type_1() {
    const loadLayer = document.querySelector('.loading-layer');
    const percent = document.querySelector('.loading-layer .percentage');
    const truck = document.querySelector('.loading-layer .truck');
    const rocket = document.querySelector('.loading-layer .rocket');
    const soldier = document.querySelector('.loading-layer .soldier');
    const land = document.querySelector('.loading-layer .land > h1');

    const loadingTimes = setInterval(()=> {
        if(percent.textContent === '100') {
            const landscape = document.querySelector('.loading-layer .land > h1');
            const landscapeLoc = window.getComputedStyle(landscape).getPropertyValue('transform');

            clearInterval(loadingTimes);
            truck.style.left = '25%';

            setTimeout(() => {
                rocket.style.width = '40%';
                rocket.style.height = '40%';
                rocket.style.top = '30%';
                landscape.style.animation = 'none';
                landscape.style.transform = landscapeLoc;
                setInterval(()=>{loadLayer.style.display = 'none';},1000);
            }, 1000);

            // alert(landscapeLoc);
        }else {
            percent.textContent = Number(percent.textContent) + 1;
        }
    }, 50)

    setTimeout(() => {
        soldier.style.left = '-25%'
        rocket.style.display = 'block';
        land.style.animation = 'loading-landscape-move 2s linear infinite';
    }, 1000);
}

