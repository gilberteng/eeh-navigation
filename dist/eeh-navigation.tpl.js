angular.module('eehNavigation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-navigation/eeh-navigation.html',
    "<nav class=\"navbar navbar-default navbar-static-top eeh-navigation\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a ng-if=\"_navbarBrand.state && !_navbarBrand.href\" class=\"navbar-brand\" ui-sref=\"{{ _navbarBrand.state }}\">\n" +
    "            <span ng-include=\"'template/eeh-navigation/navbar-brand.html'\"></span>\n" +
    "        </a>\n" +
    "        <a ng-if=\"!_navbarBrand.state && _navbarBrand.href\" class=\"navbar-brand\" ng-href=\"{{ _navbarBrand.href }}\">\n" +
    "            <span ng-include=\"'template/eeh-navigation/navbar-brand.html'\"></span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-top-links navbar-left\">\n" +
    "        <li ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            class=\"dropdown\"></li>\n" +
    "    </ul>\n" +
    "    <ul class=\"nav navbar-top-links navbar-right\">\n" +
    "        <li ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            class=\"dropdown\"></li>\n" +
    "    </ul>\n" +
    "    <div collapse=\"isNavbarCollapsed\">\n" +
    "        <div class=\"navbar-default sidebar\" role=\"navigation\">\n" +
    "            <div class=\"sidebar-nav navbar-collapse\">\n" +
    "                <ul class=\"nav\">\n" +
    "                    <li class=\"sidebar-search\" ng-show=\"!_sidebarTextCollapse.isCollapsed && _sidebarSearch.isVisible\">\n" +
    "                        <form ng-submit=\"_sidebarSearch.submit()\">\n" +
    "                            <div class=\"input-group\">\n" +
    "                                <input type=\"text\" class=\"form-control search-input\" placeholder=\"{{'Search'|eehTranslate}}\"\n" +
    "                                       ng-model=\"_sidebarSearch.model\">\n" +
    "                                <span class=\"input-group-btn\">\n" +
    "                                    <button class=\"btn btn-default\" type=\"submit\">\n" +
    "                                        <i class=\"fa fa-search\"></i>\n" +
    "                                    </button>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </li>\n" +
    "                    <li ng-repeat=\"item in sidebarMenuItems | orderBy:'weight'\"\n" +
    "                        ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\n" +
    "                        ng-if=\"item._isVisible()\"></li>\n" +
    "                    <li ng-click=\"toggleSidebarTextCollapse()\" ng-if=\"_sidebarTextCollapse.isVisible\">\n" +
    "                        <a>\n" +
    "                            <span class=\"fa fa-fw\"\n" +
    "                                  ng-class=\"_sidebarTextCollapse.isCollapsed ? 'fa-arrow-right' : 'fa-arrow-left'\"></span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div id=\"eeh-navigation-page-wrapper\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div ng-transclude></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-brand.html\">\n" +
    "    <img ng-if=\"_navbarBrand.src\" ng-src=\"{{_navbarBrand.src}}\">\n" +
    "    <span ng-if=\"_navbarBrand.text\">{{ _navbarBrand.text|eehTranslate }}</span>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-menu-item.html\">\n" +
    "    <a ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\" ui-sref-active=\"active\" eeh-active-parent-menu-item>\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\" eeh-active-parent-menu-item></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\">\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\" eeh-active-parent-menu-item></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.hasChildren()\" class=\"dropdown-toggle\" eeh-is-active-menu-item>\n" +
    "        <span class=\"fa fa-fw {{ item.iconClass }}\"></span>\n" +
    "        <span> {{ item.text|eehTranslate }}</span>\n" +
    "        <span class=\"fa fa-caret-down\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"item.hasChildren()\" class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"item in item.children()|orderBy:'weight'\"\n" +
    "            ng-class=\"{'divider': item.isDivider}\"\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"></li>\n" +
    "    </ul>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/sidebar-menu-item.html\">\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\" ui-sref-active=\"active\">\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\">\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"!item.state && item.hasChildren() && !_sidebarTextCollapse.isCollapsed\"\n" +
    "       ng-click=\"item.isCollapsed = !item.isCollapsed\">\n" +
    "        <span ng-include=\"'template/eeh-navigation/menu-item-content.html'\"></span>\n" +
    "        <span class=\"navbar-right sidebar-arrow fa fa-fw\"\n" +
    "              ng-class=\"item.isCollapsed ? 'fa-chevron-left' : 'fa-chevron-down'\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren() && !_sidebarTextCollapse.isCollapsed\" collapse=\"item.isCollapsed\" class=\"nav\">\n" +
    "        <li ng-repeat=\"item in item.children()\"\n" +
    "            ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"></li>\n" +
    "    </ul>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/menu-item-content.html\">\n" +
    "    <span class=\"menu-item-icon fa fa-fw {{ item.iconClass}}\"></span>\n" +
    "    <span class=\"menu-item-text\"> {{ item.text|eehTranslate }}</span>\n" +
    "</script>\n"
  );

}]);
