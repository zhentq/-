/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(function(){
    bindHtml()
    const inp = document.querySelector('.form > input')
    // console.log(inp);
    const cart = []
    inp.addEventListener('keydown', function(e){
    
        e = e || window.event
        var code = e.keyCode || e.which
        e.preventDefault()
    
        if(e.keyCode == 13){
            // console.log('回车');
            // const value = []  
            const value = this.value.trim()

            cart.push(value)
            window.localStorage.setItem('cart',JSON.stringify(cart))
            // console.log(value);
            if(!value){
                
                return
            }else{
                $(this).val("")
                bindHtml()
            }
        }
        return
    })
    
    function bindHtml(){
    
        let str =''
        const list = JSON.parse(window.localStorage.getItem('cart'))
        console.log(list)
        list.forEach(item => {
            console.log(item);
            str=`
            <li>
                <input type="checkbox" />
                <p onclick="edit(num + 1)">${ item }</p>
                <a href="javascript:remove(1)">-</a>
            </li>
            `
            $(' .demo-box  ').append(str)
        })
    
    
    }


    $('ol').on('click', 'input', function(){
        const thing = $(this).parent()
        $('ul').append(thing)
        const shu = $('ol > li').length
        console.log(shu);
        $('#todocount').html(shu)
    })
    
    
    $('ol').on('click', 'a', function(){
        $(this).parents('li').remove()
        const count = $('ol > li').length
        $('#todocount').html(count)
    })
    
    
    $('ul').on('click', 'input', function(){
        const thing = $(this).parent()
        $('ol').append(thing)
        const num = $('ul > li').length
        $('#donecount').html(num)
    })
    
    
    $('ul').on('click', 'a', function(){
        $(this).parents('li').remove()
        const count = $('ul > li').length
        $('#donecount').html(count)
    })
    
    
    
})

