/**
 * SkinDemo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*eslint no-console:0 */

define(
  'tinymce.core.demo.SkinDemo',
  [
    'global!window',
    'tinymce.core.EditorManager',
    'tinymce.core.PluginManager',
    'tinymce.plugins.advlist.Plugin',
    'tinymce.plugins.anchor.Plugin',
    'tinymce.plugins.autolink.Plugin',
    'tinymce.plugins.autoresize.Plugin',
    'tinymce.plugins.autosave.Plugin',
    'tinymce.plugins.bbcode.Plugin',
    'tinymce.plugins.charmap.Plugin',
    'tinymce.plugins.code.Plugin',
    'tinymce.plugins.codesample.Plugin',
    'tinymce.plugins.colorpicker.Plugin',
    'tinymce.plugins.contextmenu.Plugin',
    'tinymce.plugins.directionality.Plugin',
    'tinymce.plugins.emoticons.Plugin',
    'tinymce.plugins.fullpage.Plugin',
    'tinymce.plugins.fullscreen.Plugin',
    'tinymce.plugins.help.Plugin',
    'tinymce.plugins.hr.Plugin',
    'tinymce.plugins.image.Plugin',
    'tinymce.plugins.imagetools.Plugin',
    'tinymce.plugins.importcss.Plugin',
    'tinymce.plugins.insertdatetime.Plugin',
    'tinymce.plugins.legacyoutput.Plugin',
    'tinymce.plugins.link.Plugin',
    'tinymce.plugins.lists.Plugin',
    'tinymce.plugins.media.Plugin',
    'tinymce.plugins.nonbreaking.Plugin',
    'tinymce.plugins.noneditable.Plugin',
    'tinymce.plugins.pagebreak.Plugin',
    'tinymce.plugins.paste.Plugin',
    'tinymce.plugins.preview.Plugin',
    'tinymce.plugins.print.Plugin',
    'tinymce.plugins.save.Plugin',
    'tinymce.plugins.searchreplace.Plugin',
    'tinymce.plugins.spellchecker.Plugin',
    'tinymce.plugins.tabfocus.Plugin',
    'tinymce.plugins.table.Plugin',
    'tinymce.plugins.template.Plugin',
    'tinymce.plugins.textcolor.Plugin',
    'tinymce.plugins.textpattern.Plugin',
    'tinymce.plugins.toc.Plugin',
    'tinymce.plugins.visualblocks.Plugin',
    'tinymce.plugins.visualchars.Plugin',
    'tinymce.plugins.wordcount.Plugin',
    'tinymce.themes.modern.Theme'
  ],
  function (
    window, EditorManager, PluginManager, AdvListPlugin, AnchorPlugin, AutoLinkPlugin, AutoResizePlugin, AutoSavePlugin, BbCodePlugin, CharMapPlugin, CodePlugin,
    CodeSamplePlugin, ColorPickerPlugin, ContextMenuPlugin, DirectionalityPlugin, EmoticonsPlugin, FullPagePlugin, FullScreenPlugin, HelpPlugin, HrPlugin, ImagePlugin,
    ImageToolsPlugin, ImportCssPlugin, InsertDatetimePlugin, LegacyOutputPlugin, LinkPlugin, ListsPlugin, MediaPlugin, NonBreakingPlugin, NonEditablePlugin,
    PageBreakPlugin, PastePlugin, PreviewPlugin, PrintPlugin, SavePlugin, SearchReplacePlugin, SpellCheckerPlugin, TabFocusPlugin, TablePlugin, TemplatePlugin,
    TextColorPlugin, TextPatternPlugin, TocPlugin, VisualBlocksPlugin, VisualCharsPlugin, WordCountPlugin, ModernTheme
  ) {
    AdvListPlugin();
    AnchorPlugin();
    AutoLinkPlugin();
    AutoResizePlugin();
    AutoSavePlugin();
    BbCodePlugin();
    CharMapPlugin();
    CodePlugin();
    CodeSamplePlugin();
    ColorPickerPlugin();
    ContextMenuPlugin();
    DirectionalityPlugin();
    EmoticonsPlugin();
    FullPagePlugin();
    FullScreenPlugin();
    HrPlugin();
    ImagePlugin();
    ImageToolsPlugin();
    ImportCssPlugin();
    InsertDatetimePlugin();
    LegacyOutputPlugin();
    LinkPlugin();
    ListsPlugin();
    MediaPlugin();
    NonBreakingPlugin();
    NonEditablePlugin();
    PageBreakPlugin();
    PastePlugin();
    PreviewPlugin();
    PrintPlugin();
    SavePlugin();
    SearchReplacePlugin();
    SpellCheckerPlugin();
    TabFocusPlugin();
    TablePlugin();
    TemplatePlugin();
    TextColorPlugin();
    TextPatternPlugin();
    TocPlugin();
    VisualBlocksPlugin();
    VisualCharsPlugin();
    WordCountPlugin();
    ModernTheme();
    HelpPlugin();

    return function () {
      EditorManager.init({
        skin_url: '../../../../skins/custom_skin/dist/custom_skin',
        selector: 'textarea',
        branding: false,
        menubar: false,
        statusbar: false,
        height: 500,
        width: 750,
        plugins: 'code textcolor lists hr',
        toolbar: 'undo redo | fontsizeselect forecolor | bold italic underline strikethrough code | alignleft aligncenter alignright | bullist numlist outdent indent | hr | removeformat',
        table_appearance_options: false,
        table_toolbar: false,
        table_tab_navigation: false,
        table_advtab: false,
        table_row_advtab: false,
        table_default_styles: {
          width: '100%'
        },
        schema: 'html5',
        element_format: 'html',
        forced_root_block: 'div',
        formats: {
          bold: {inline: 'b'},
          italic: {inline: 'i'}
        },
        mobile: { theme: 'beta-mobile' },
        fontsize_formats: '8px 10px 12px 14px 18px 24px 36px'
      });

      window.tinymce = EditorManager;
    };
  }
);
