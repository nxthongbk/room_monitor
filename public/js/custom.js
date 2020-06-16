 /*jslint browser: true*/
 /*global $, jQuery, alert*/

 $(document).ready(function () {

     "use strict";

     var body = $("body");

     $(function () {
         $(".preloader").fadeOut();
         $('#side-menu').metisMenu();
     });

     /* ===== Theme Settings ===== */

     $(".open-close").on("click", function () {
         body.toggleClass("show-sidebar").toggleClass("hide-sidebar");
         $(".sidebar-head .open-close i").toggleClass("ti-menu");
     });



     /* ===========================================================
         Loads the correct sidebar on window load.
         collapses the sidebar on window resize.
         Sets the min-height of #page-wrapper to window size.
     =========================================================== */

     $(function () {
         var set = function () {
                 var topOffset = 60,
                     width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width,
                     height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
                 if (width < 768) {
                     $('div.navbar-collapse').addClass('collapse');
                     topOffset = 100; /* 2-row-menu */
                 } else {
                     $('div.navbar-collapse').removeClass('collapse');
                 }

                 /* ===== This is for resizing window ===== */

                 if (width < 1170) {
                     body.addClass('content-wrapper');
                     $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
                 } else {
                     body.removeClass('content-wrapper');
                 }

                 height = height - topOffset;
                 if (height < 1) {
                     height = 1;
                 }
                 if (height > topOffset) {
                     $("#page-wrapper").css("min-height", (height) + "px");
                 }
             },
             url = window.location,
             element = $('ul.nav a').filter(function () {
                 return this.href === url || url.href.indexOf(this.href) === 0;
             }).addClass('active').parent().parent().addClass('in').parent();
         if (element.is('li')) {
             element.addClass('active');
         }
         $(window).ready(set);
         $(window).bind("resize", set);
     });


     /* ===== Tooltip Initialization ===== */

     $(function () {
         $('[data-toggle="tooltip"]').tooltip();
     });

     /* ===== Popover Initialization ===== */

     $(function () {
         $('[data-toggle="popover"]').popover();
     });

     /* ===== Task Initialization ===== */

     $(".list-task li label").on("click", function () {
         $(this).toggleClass("task-done");
     });
     $(".settings_box a").on("click", function () {
         $("ul.theme_color").toggleClass("theme_block");
     });

     /* ===== Collepsible Toggle ===== */

     $(".collapseble").on("click", function () {
         $(".collapseblebox").fadeToggle(350);
     });

     /* ===== Sidebar ===== */

     $('.slimscrollright').slimScroll({
         height: '100%',
         position: 'right',
         size: "5px",
         color: '#dcdcdc'
     });
     $('.slimscrollsidebar').slimScroll({
         height: '100%',
         position: 'right',
         size: "6px",
         color: 'rgba(0,0,0,0.3)'
     });
     $('.chat-list').slimScroll({
         height: '100%',
         position: 'right',
         size: "0px",
         color: '#dcdcdc'
     });

     /* ===== Resize all elements ===== */

     body.trigger("resize");

     /* ===== Visited ul li ===== */

     $('.visited li a').on("click", function (e) {
         $('.visited li').removeClass('active');
         var $parent = $(this).parent();
         if (!$parent.hasClass('active')) {
             $parent.addClass('active');
         }
         e.preventDefault();
     });

     /* ===== Login and Recover Password ===== */

     $('#to-recover').on("click", function () {
         $("#loginform").slideUp();
         $("#recoverform").fadeIn();
     });

     /* ================================================================= 
         Update 1.5
         this is for close icon when navigation open in mobile view
     ================================================================= */

     $(".navbar-toggle").on("click", function () {
         $(".navbar-toggle i").toggleClass("ti-menu").addClass("ti-close");
     });
 });

 $(document).ready(function(){
    $('.filterable .btn-filter').click(function(){
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    });

    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
        }
    });
});
