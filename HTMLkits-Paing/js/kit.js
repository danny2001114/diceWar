function spaceTrim(str) {

    const attri = str.split(' ');
    let result ='';
    for(n = 0; n < attri.length; n ++ ) {

        if(attri[n] !== '') {

            result += attri[n] + ' ';
        }
    }
    return result;
}

///////////////////////////////////////
//      Common Attribute Set         //
//              | | |                //
//              V V V                //
///////////////////////////////////////

$('[width]').set(i => {

    i.style.width = i.getAttribute('width');
})

$('[height]').set(i => {

    i.style.height = i.getAttribute('height');
})

$('[size]').set(i => {

    const attri = spaceTrim(i.getAttribute('size')).split(' ');
    if(attri.length < 3) {
        i.style.width = attri[0];
        i.style.height = attri[0];
    }else {    
        i.style.width = attri[0];
        i.style.height = attri[1];
    }
})

//////////////////////////////////////
//         Flex Element Set         //
//              | | |               //
//              V V V               //
//////////////////////////////////////

$('flex').as('div');

//////////////////////////////////////
//         Grid Element Set         //
//              | | |               //
//              V V V               //
//////////////////////////////////////
$('grid').as('div').set(function() {

       $('[grid] > [col-span]').set(i => {

            const span = i.getAttribute('col-span');
            i.style.gridColumn = span.split('/')[0] + '/ span' + span.split('/')[1];
       });

       $('[grid] > [row-span]').set(i => {

            const span = i.getAttribute('row-span');
            i.style.gridRow = span.split('/')[0] + '/ span' + span.split('/')[1];
       });

       $('[grid][gap]').set(i => {

            const attri = i.getAttribute('gap');

            if(attri.includes('col')) {

                i.style.columnGap = attri.split('-')[1];
            }else if(attri.includes('row')) {

                i.style.rowGap = attri.split('-')[1];
            }else if(attri.includes('/')) {

                i.style.columnGap = attri.split('/')[0];
                i.style.rowGap = attri.split('/')[1];
            }else i.style.gap = attri;
       });

       $('[grid][temp]').set(i => {

        const attri = i.getAttribute('temp');

        if(attri.includes('col')) {

            const value = attri.split('-')[1];

            for(n = 0 ; n < Number(value.split('*')[1]); n++) {

                i.style.gridTemplateColumns += ` ${value.split('*')[0]}`;
            }
        }//else if(attri.includes('row')) {

        //     i.style.rowGap = attri.split('-')[1];
        // }else if(attri.includes('/')) {

        //     i.style.columnGap = attri.split('/')[0];
        //     i.style.rowGap = attri.split('/')[1];
        // }else i.style.gap = attri;
   });
});



