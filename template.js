//this is the javascript functions

function sendMessage ()
{
    var requestUrl = 'index/message';
    var message = $F('textmessage');
    try
    {
        var request = new Ajax.Request(
            requestUrl,
            {
                method: 'get',
                parameters: 'message=' + encodeURIComponent(message),
                onComplete: handleRefresh
            }
        );
    }
    catch (e)
    {
        alert('Error: ' + e.toString());
    }
}

function handleRefresh (reply)
{
    $('textmessage').value = '';
    var newMessages = eval('(' + reply.responseText + ')');
    var messageCount = newMessages.length;
    for (var i=0; i' + 
                newMessages[i].author + ': ' + newMessages[i].text
                + '
';
    }
    $('chatpane').scrollTop = $('chatpane').scrollHeight;
}

function save() {
        var saveCmd = {
            readOnly: 1,

            exec: function(editor) {
                if (editor.fire('save')) {

                    var $form = editor.element.$.form;

                    if (editor.config.onSave) {
                        editor.config.onSave(editor) // If custom action is set, do it.
                    } else if ($form) {
                        try {
                            $form.submit();
                        } catch (e) {
                            // If there's a button named "submit" then the form.submit
                            // function is masked and can't be called in IE/FF, so we
                            // call the click() method of that button.
                            if ($form.submit.click)
                                $form.submit.click();
                        }
                    }
                }
            }
        };

        var pluginName = 'save';

        // Register a plugin named "save".
        CKEDITOR.plugins.add(pluginName, {
            lang: 'af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,ug,uk,vi,zh,zh-cn', // %REMOVE_LINE_CORE%
            icons: 'save', // %REMOVE_LINE_CORE%
            hidpi: true, // %REMOVE_LINE_CORE%
            init: function(editor) {

                // if ( editor.elementMode != CKEDITOR.ELEMENT_MODE_REPLACE )
                //     return;
                // I do not need this, but you can enable.

                var command = editor.addCommand(pluginName, saveCmd);
                command.modes = { wysiwyg: !!(editor.element.$.form || editor.config.onSave)};

                editor.ui.addButton && editor.ui.addButton('Save', {
                    label: editor.lang.save.toolbar,
                    command: pluginName,
                    toolbar: 'document,10'
                });
            }
        });
    })();
setInterval(doAutoSave, 30000);
CKEDITOR.plugins.add( pluginName,
   {
      init : function( ajaxAutoSave)
      {
         var command = editor.addCommand( ajaxAutoSave, ajaxAutoSaveCmd );
         command.modes = { wysiwyg : !!( editor.element.$.form ) };
         editor.ui.addButton( 'ajaxAutoSave',
            {
               label : 'ajaxAutoSave',
               command : pluginName,
               icon:this.path+'images/ajaxAutoSaveClean.gif'
            });   

         setInterval("editor.execCommand('ajaxAutoSave')",30000);
      }
   });
function doAutoSave()
{
var data = CKEDITOR.instances.TextBody.getData();
$.ajax(.......)
}

