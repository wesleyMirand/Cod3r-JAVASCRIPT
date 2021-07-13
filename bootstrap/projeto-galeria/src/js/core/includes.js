import $ from 'jquery'

function loadIncludes(parent) {
  if(!parent) parent = 'body'
  $(parent).fund('[wm-include]').each(function(i, e){
    cont url = $(e),attr('wm-include')
    $.ajax({
      url,
      success(data) {
        $(e).html(data)
        $(e).removeAttr('wm-include')

        loadIncludes(e)
      }
    })
  })
}

loadIncludes()