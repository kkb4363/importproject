https://m.blog.naver.com/jooeun0502/221956294941 => README.md 사용법

# 리액트 font awesome 적용 법 
1. import {사용할 아이콘} from "react-icons/fa";
2. <사용할 아이콘> </사용할 아이콘>
( style , color, fontSize 등 설정 가능 )

## jquery 사용법
$('#test') => id가 test인 걸 찾아주세요.
$('.test') => class가 test인 걸 찾아주세요.

$('.topMenu').css('display','block'); => class가 topmenu인걸 찾아서 css.display값을 block으로 바꿔주세요.
(css는 보통 display: block 이런식인데 jqeury에서는 'display','block'이렇게 씀)

useEffect(()=>{          ==> 페이지가 렌더링 될때마다 console에 1이 출력됌.
    console.log(1)          (참고 : https://www.youtube.com/watch?v=kyodvzc5GHU&t=769s)
})                 

useEffect(()=>{          ==> 처음 페이지가 열릴때만 console에 1이 출력됌.
    console.log(1)
},[])


