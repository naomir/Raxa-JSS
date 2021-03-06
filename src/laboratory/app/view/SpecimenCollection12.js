/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 *  This view shows criterias for showing various specimen collection criterias
 */
Ext.define('Laboratory.view.SpecimenCollection12', {
    extend: 'Ext.container.Container',
    alias: 'widget.SpecimenCollection12',
    autoScroll: true,
    activeItem: 0,

    layout: {
        type: 'absolute'
    },

    items: [{
        xtype: 'displayfield',
        fieldLabel: 'Lab Order No.',
        x: 230,
        y: 0
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Patient',
        labelAlign: 'top',
        x: 240,
        y: 40
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Provider',
        labelAlign: 'top',
        x: 440,
        y: 40
    }, {
        xtype: 'displayfield',
        width: 70,
        fieldLabel: 'Patient ID',
        x: 240,
        y: 70
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Name',
        x: 440,
        y: 70
    }, {
        xtype: 'displayfield',
        fieldLabel: 'DOB',
        x: 240,
        y: 100
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Location',
        x: 440,
        y: 100
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Patient ID',
        x: 240,
        y: 130
    }, {
        xtype: 'gridpanel',
        title: 'My Grid Panel',
        x: 210,
        y: 190,
        columns: [{
            xtype: 'gridcolumn',
            dataIndex: 'string',
            text: 'String'
        }, {
            xtype: 'gridcolumn',
            text: 'Investigation'
        }, {
            xtype: 'gridcolumn',
            text: 'Ok to Collect'
        }],
        viewConfig: {

        }
    }, {
        xtype: 'displayfield',
        value: 'Patient Criteria:',
        fieldLabel: '',
        x: 220,
        y: 330
    }, {
        xtype: 'displayfield',
        value: 'Does patient have a temperation greater than 101 F',
        fieldLabel: 'Q1',
        x: 220,
        y: 350
    }, {
        xtype: 'button',
        text: 'Continue',
        x: 490,
        y: 390,
        handler: function () {
            var l = Ext.getCmp('mainLabArea').getLayout();
            l.setActiveItem(LAB_PAGES.SPECIMEN_COLLECTION_SPECIMEN_COLLECTION_GRID.value);
        }
    }, {
        xtype: 'button',
        text: 'Cancel',
        x: 320,
        y: 390,
        handler: function () {
            var l = Ext.getCmp('mainLabArea').getLayout();
            l.setActiveItem(LAB_PAGES.SPECIMEN_COLLECTION_HOME.value);
        }
    }, {
        xtype: 'button',
        text: 'Back',
        x: 150,
        y: 390,
        handler: function () {
            var l = Ext.getCmp('mainLabArea').getLayout();
            l.setActiveItem(LAB_PAGES.SPECIMEN_COLLECTION_LAB_ORDER_SEARCH_RESULT.value);
        }
    }]

});
