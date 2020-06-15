const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#ff324c',

            '@table-bg': 'rgb(39, 53, 82)',
            '@table-header-bg': 'rgb(39, 53, 82)',
            '@table-header-color': 'white',
            '@table-header-sort-bg': 'rgb(56, 77, 117)',
            '@table-body-sort-bg': 'rgb(56, 77, 117)',
            '@table-row-hover-bg': 'rgb(56, 77, 117)',
            '@table-selected-row-color': 'rgb(56, 77, 117)',
            '@table-selected-row-bg': 'rgb(56, 77, 117)',
            '@table-body-selected-sort-bg': 'rgb(56, 77, 117)',
            // '@table-selected-row-hover-bg': darken(@table-selected-row-bg, 2%),
            // '@table-expanded-row-bg': #fbfbfb,
            // '@table-padding-vertical': 16px,
            // '@table-padding-horizontal': 16px,
            // '@table-padding-vertical-md': @table-padding-vertical * 3 / 4,
            // '@table-padding-horizontal-md': @table-padding-horizontal / 2,
            // '@table-padding-vertical-sm': @table-padding-vertical / 2,
            // '@table-padding-horizontal-sm': @table-padding-horizontal / 2,
            // '@table-border-radius-base': @border-radius-base,
            '@table-footer-bg':'rgb(39, 53, 82)',
            // '@table-footer-color': @heading-color,
            // '@table-header-bg-sm': @table-header-bg,
            // '@table-font-size': @font-size-base,
            // '@table-font-size-md': @table-font-size,
            // '@table-font-size-sm': @table-font-size,
            // // Sorter
            // // Legacy': `table-header-sort-active-bg` is used for hover not real active
            '@table-header-sort-active-bg': 'rgb(56, 77, 117)',
            // // Filter
            // '@table-header-filter-active-bg': 'pink',
            // '@table-filter-btns-bg': inherit,
            // '@table-filter-dropdown-bg': @component-background,
            // '@table-expand-icon-bg': @component-background,
            // '@table-selection-column-width': 60px,
            // '@table-selection-extra-right': 0,

            // '@input-placeholder-color': 'lightgray',
            // '@input-color': 'white',
            // '@input-icon-color': 'white',
            // '@input-border-color': 'gray',
            // '@input-bg': 'rgba(19, 28, 46, 0.95)',
        },
    }),
);