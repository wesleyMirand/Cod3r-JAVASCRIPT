import $ from 'jquery'

const loadHtmlSucessCallBacks = []

export function onLoadHtmlSucess(callback) {
  if (!loadHtmlSucessCallBacks.includes(callback)) {
    loadHtmlSucessCallBacks.push(callback)
  }
}

function loadIncludes(parent) {
  if (!parent) parent = 'body'
  $(parent).fund('[wm-include]').each(function (i, e) {
    const url = $(e), attr('wm-include')
    $.ajax({
      url,
      success(data) {
        $(e).html(data)
        $(e).removeAttr('wm-include')

        loadHtmlSucessCallBacks.forEach(
          callback => callback(data))
        loadIncludes(e)
      }
    })
  })
}

loadIncludes()