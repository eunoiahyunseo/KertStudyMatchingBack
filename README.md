# STUIK ( Study In Kert )

>

- STUIK는 컬트에서 매칭되는 다양한 스터디 매칭에 도움이 되고자 만들어진 웹 앱입니다. 본 프로젝트는 경북대 고급 웹 프로그래밍 과제로 제출되었음을 명시합니다.

## 개발 환경

> - FE ( React 활용 )
>   - (CSS-In-JS) Styled-Component,
>   - (Redux) Redux-Saga
> - BE ( Koa FrameWork 활용 )
>   - ( Authenticate ) JWT
>   - ( Multipart ) @Koa/Multer
> - IDE ( Vs Code 활용 )

## 대략적인 사용방법

---

- ## 홈

![캡처](/ReadMe/homepage.png)

여기서 좌측 맨 위 햄버거 바를 클릭하면 아래와 같습니다.

## ![캡처](/ReadMe/homepage_navbar.png)

- ## 로그인 && 회원가입

![캡처](/ReadMe/login.png)

![캡처](/ReadMe/register.png)

- 우선 register page에서 자신의 email을 등록하고 비밀번호를 입력해 주셔서 회원가입 하면 됩니다.
  - 기본적인 username이 부여되는데 이는 User-[number]의 형식을 따릅니다.
  - 위에서 부여된 username은 로그인되면 navBar에 뜨는 프로필 수정에서 바꾸실 수 있습니다.
- 그 후로는 login page로 위에서 등록한 정보로 들어가시면 됩니다.

---

- ## 회원정보 수정

![캡처](/ReadMe/editprofile.png)

- 기본적으로 email은 바꿀 수 없습니다. 이를 바꾸시고 싶은 경우 관리자로 연락 바랍니다.

---

- ## 스터디 등록 && 표시

![캡처](/ReadMe/homepage_2.png)

- 우선 스터디를 표시하는 기호에는 3가지가 있습니다.
  - 파란별은 자신이 만든 스터디임을 명시합니다
  - 회색 하트는 다른 사람이 만든 스터디로서 참여할 수 있는 스터디를 명시합니다.
  - 파란 하트는 자신이 참여하는 스터디로서, 스터디를 탈퇴하면 다시 회색 하트로 돌아오게 됩니다.
- 또한 스터디에는 제한 인원을 최소 2명 최대 20명을 지정할 수 있습니다.
  - 위와 같이 2명을 모집하는 스터디에 2명이 지원하면 모집완료라고 뜨고 겉면이 파란색으로 변하게 됩니다.
- 또한 기본적으로 각 표지에는 기본적인 정보를 포함합니다.
  - 스터디를 만든 사람의 이름과 만든 날짜
  - 제목과 모집 여부
  - 스터디와 관련되어 있는 태그
    - 이를 클릭하면 관련 태그들로 이루어진 스터디의 목록을 보실 수 있습니다.
- 페이지는 한 페이지당에 6개로 제한됩니다.
  - 6개가 넘어간다면 아래의 (다음)버튼이 활성화 되어 넘어갈 수 있습니다.
  - 각 스터디는 날짜에 대해 오름차순입니다. ( 최신이 맨 위 )

---

- ## 스터디 만들기

![캡처](/ReadMe/write.png)

- 기몬적으로 스터디에 들어가는 정보는 제목, 본문, 태그, 제한인원
  - 제목과 본문, 제한인원은 빈칸이여서는 안됩니다.
    - 제한인원의 기본 값은 2명입니다.
  - 태그는 예외적으로 빈칸을 허용합니다.
- 본문에 들어가는 이미지는 크기가 500px \* [number] <= 4MB로 제한됩니다.
  - 크기가 큰 이미지를 넣게 되면 이미지가 다소 흐리게 나올 수 있습니다.

---

- ## 스터디 확인

![캡처](/ReadMe/study_confirm.png)

- 스터디를 클릭하게 되면 스터디의 정보를 확인할 수 있습니다.
- 스터디에 가입할 수 있는 버튼이 활성화 됩니다.
  - 만약 스터디에 가입되어 있는 상태라면 탈퇴 버튼이 그 자리에 활성화 됩니다.
  - 스터디를 만든 사람은 ( 스터디 장 )이라는 문구가 뜹니다.

![캡처](/ReadMe/study_confirm_2.png)

- 스터디에 참여하는 인원을 확인할 수 있습니다.
  - 노란색 배경은 스터디를 만든 사람의 정보입니다.
  - 그리고 현재 접속해 있는 유저는 > 로 표시됩니다.
- 스터디의 모집 인원의 제한인원은 스터디 장을 제외한 숫자임을 주의해야 합니다.