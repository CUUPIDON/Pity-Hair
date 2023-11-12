(() => {
    // run this file in button of the sc2 script

    const _ = window.modUtils.getLodash();
    const log = window.modUtils.getLogger();

    const data = [
        {
			index: 101,
			name: "winnie",
			name_cap: "Winnie",
			variable: "winnie",
			type: ["loose"],
			shop: ["mirrorhair"],
		},
    ];

    const init = () => {

        // clothing-under_upper.js
        // initunder_upper.setup.moddedClothes.under_upper
        if (window.DOL.setup?.hairstyles?.sides) {
            console.log('window.DOL.setup.hairstyles.sides', window.DOL.setup.hairstyles.sides);
            for (const d of data) {
                d.index = window.DOL.setup.hairstyles.sides.length + 1;
                window.DOL.setup.hairstyles.sides.push(d);
            }
            log.log('[hairstyles-mods] window.setup.hairstyles.sides patch ok.');
        } else {
            console.error('window.setup.hairstyles.sides not found');
            log.error('[hairstyles-mods] window.setup.hairstyles.sides not found');
        }
    };

    // we must init it in first passage init
    let isInit = false;
    window.modSC2DataManager.getSc2EventTracer().addCallback({
        whenSC2PassageInit: () => {
            if (isInit) {
                return;
            }
            isInit = true;
            init();
        },
    });


})();
