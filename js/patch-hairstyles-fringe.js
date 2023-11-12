(() => {
    // run this file in button of the sc2 script

    const _ = window.modUtils.getLodash();
    const log = window.modUtils.getLogger();

    const data = [
        {
			index: 100,
			name: "winnie",
			name_cap: "Winnie",
			variable: "winnie",
			type: ["loose"],
			shop: ["mirrorhair"],
		},
    ];

    const init = () => {

        // clothing-under.js
        // initunder.setup.moddedClothes.under
        if (window.DOL.setup?.hairstyles?.fringe) {
            console.log('window.DOL.setup.hairstyles.fringe', window.DOL.setup.hairstyles.fringe);
            for (const d of data) {
                d.index = window.DOL.setup.hairstyles.fringe.length + 1;
                window.DOL.setup.hairstyles.fringe.push(d);
            }
            log.log('[hairstyles-mods] window.setup.hairstyles.fringe patch ok.');
        } else {
            console.error('window.setup.hairstyles.fringe not found');
            log.error('[hairstyles-mods] window.setup.hairstyles.fringe not found');
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
