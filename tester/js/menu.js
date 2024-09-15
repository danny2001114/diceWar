window.addEventListener('load',()=> {
    main_menu_pack();
    mode_menu_pack();
    in_progress();
    btns_trigger();
})

function main_menu_pack() {
    const layer = document.querySelector('.menu-page');
    layer.innerHTML += `
        <menu class="main">
            <button>Start</button>
            <button>Option</button>
            <button>Exit</button>
        </menu>`;
}

function mode_menu_pack() {
    const layer = document.querySelector('.menu-page');
    layer.innerHTML += `
        <menu class="mode">
            <button>Solo</button>
            <button>Multiplayer</button>
            <button>Back</button>
        </menu>`;
}

function btns_trigger(){
    const btns = Array.from(document.querySelectorAll('.menu-page button'));
    const menu = Array.from(document.querySelectorAll('.menu-page menu'));

    btns.forEach(btn => {

        btn.addEventListener('click',(evn)=> {
            const status = evn.currentTarget.textContent;
            if(status === 'Start') {
                menu[0].style.display = 'none';
                menu[1].style.display = 'grid';
            }
            else if(status === 'Option') alert('you are setting the game...');
            else if(status === 'Exit') alert('you want to leave from game..?');
            else if(status === 'Solo') alert('versus with bot...');
            else if(status === 'Multiplayer') alert('have fun with friend...');
            else if(status === 'Back') {
                menu[1].style.display = 'none';
                menu[0].style.display = 'grid';
            }
        })
    })
}

function in_progress() {
    const btns = Array.from(document.querySelectorAll('.menu-page button'));

    btns.forEach(btn => {
        disable(btn,'Option');
        disable(btn,'Exit');
    })
    function disable(tgt,con) {
            if(tgt.textContent === con) {
                tgt.style.pointerEvents = 'none';
                tgt.style.color = 'red';
                tgt.style.opacity = '0.5';
            }
    }
}