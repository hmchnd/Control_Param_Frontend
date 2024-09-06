sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'kpo.com.controlparamfiori',
            componentId: 'e_procurement_control_paramTObjectPage',
            contextPath: '/e_procurement_control_paramT'
        },
        CustomPageDefinitions
    );
});