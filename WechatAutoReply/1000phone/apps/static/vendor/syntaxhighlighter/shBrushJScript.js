(function(){function a(){var a=SyntaxHighlighter.regexLib;this.regexList=[{regex:a.multiLineDoubleQuotedString,css:"string"},{regex:a.multiLineSingleQuotedString,css:"string"},{regex:a.singleLineCComments,css:"comments"},{regex:a.multiLineCComments,css:"comments"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords("break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with"),"gm"),css:"keyword"}],this.forHtmlScript(a.scriptScriptTags)}a.prototype=new SyntaxHighlighter.Highlighter,a.aliases=["js","jscript","javascript"],SyntaxHighlighter.brushes.JScript=a,"undefined"==typeof exports?null:exports.Brush=a})();

if(typeof module === 'object') {
    module.exports = window.SyntaxHighlighter = SyntaxHighlighter;
}