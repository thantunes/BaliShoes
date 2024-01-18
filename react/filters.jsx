import {useEffect} from 'react'
const removeFilters = () => {
    const hasUpper = (str) => /[A-Z]/.test(str)
    useEffect(() => {
        setInterval(() => {
            var varTamanho = Array.prototype.slice.call(document.querySelectorAll('div[class="vtex-search-result-3-x-filter__container bb b--muted-4 vtex-search-result-3-x-filter__container--tamanho"]'))
            varTamanho.map((e) => {
                e.querySelectorAll('span[class="vtex-search-result-3-x-filterTitleSpan"]')[0].innerText === "TAMANHO" ? e.remove() : null;
            })
            var docMobi = document.querySelectorAll('div[class="vtex-search-result-3-x-accordionFilterContainer vtex-search-result-3-x-accordionFilterContainer--marcas pl7"]')
            var doc = document.querySelectorAll('div[class="vtex-search-result-3-x-filter__container bb b--muted-4 vtex-search-result-3-x-filter__container--brand"]')
            doc[0]?.remove()
            docMobi[0]?.remove()


            var varTamanhoMobile = Array.prototype.slice.call(document.querySelectorAll('div[class="vtex-search-result-3-x-accordionFilterContainer vtex-search-result-3-x-accordionFilterContainer--tamanho pl7"]'))
            varTamanhoMobile.map((e) => {
                e.querySelectorAll('span[class="vtex-search-result-3-x-accordionFilterItemTitle"]')[0].innerText === "TAMANHO" ? e.remove() : null;
            })
            console.log(document.querySelectorAll('div[title="gg"]')[0], 'isso')
            document.querySelectorAll('div[title="gg"]')[0].remove()
            document.querySelectorAll('div[title="g"]')[0].remove()

        }, 500);
    }, [])
    return null
}

export default removeFilters