sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'kpo.com.controlparamfiori',
            componentId: 'e_procurement_control_paramTList',
            contextPath: '/e_procurement_control_paramT'
        },
        CustomPageDefinitions
    );
});