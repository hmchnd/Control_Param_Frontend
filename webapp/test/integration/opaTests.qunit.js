sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'kpo/com/controlparamfiori/test/integration/FirstJourney',
		'kpo/com/controlparamfiori/test/integration/pages/e_procurement_control_paramTList',
		'kpo/com/controlparamfiori/test/integration/pages/e_procurement_control_paramTObjectPage'
    ],
    function(JourneyRunner, opaJourney, e_procurement_control_paramTList, e_procurement_control_paramTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('kpo/com/controlparamfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThee_procurement_control_paramTList: e_procurement_control_paramTList,
					onThee_procurement_control_paramTObjectPage: e_procurement_control_paramTObjectPage
                }
            },
            opaJourney.run
        );
    }
);