### REPL이란?

REPL은 Read Eval Print Loop의 약어로, 명령이 입력되고 시스템이 대화식 모드에서 출력으로 응답하는 Windows 콘솔 또는 Unix / Linux 쉘과 같은 컴퓨터 환경을 나타냅니다. 

- **Read** - 사용자의 입력을 읽고 입력을 JavaScript 데이터 구조로 구문 분석하고 메모리에 저장합니다.
- **Eval**  - 데이터 구조를 가져와 평가합니다.
- **Print**  - 결과를 인쇄합니다.
- **Loop**  - 사용자가 **Ctrl+C**를 두 번 누루거나 **Ctrl+D**를 누룰 때까지 위의 명령을 반복합니다 .

Node의 REPL 기능은 Node.js 코드를 실험하고 JavaScript 코드를 디버깅하는 데 매우 유용하게 사용됩니다.

간단하게 REPL 사용법을 알아 보도록 하겠습니다.



#### REPL 시작과 종료

쉘 / 콘솔에서 간단히 **node** 를 실행하여 REPL을 시작할 수 있습니다 . <img src="D:\Java\jspWorkspace\Node_Tutorials\REPL_01.png" alt="REPL_01" style="zoom:50%;" />

종료는  **Ctrl+C**를 두 번 누루거나 **Ctrl+D**를 누르면 됩니다. 첫 번째는 **Ctrl+D**를 눌러 바로 종료한것이고 두번째는 **Ctrl+C**를 누르면 나타나는 메세지에서 **Ctrl+C**를 다시 한번 눌러 종료한것 입니다.

도움말을 보려면 "**.help**"를 타이핑 하면 됩니다. <img src="D:\Java\jspWorkspace\Node_Tutorials\REPL_02.png" alt="REPL_02" style="zoom:50%;" />

나타나는 명령어로 확인하니 REPL을 종료하는 명령이 존재 합니다. "**.exit**"를 입력하여 종료가 가능합니다.

#### REPL의 간단한 사용

Node.js REPL 명령 프롬프트에서 간단한 수학식이나 문자열을 출력해 봅니다.  <img src="D:\Java\jspWorkspace\Node_Tutorials\REPL_03.png" alt="REPL_03" style="zoom:50%;" />

#### REPL에서 변수 사용

변수를 사용하여 값을 저장하고 나중에 일반 스크립트처럼 인쇄 할 수 있습니다. 이럴 경우 **var** 키워드를 사용하지 않습니다.  var 키워드를 사용하지 않고 사용하면 변수에 값을 저장하고 출력이 됩니다. **var** 키워드를 사용 하는 경우 값은 저장되지만 인쇄되지는 않습니다. **console.log ()를** 사용하여 변수를 인쇄 할 수 있습니다 .<img src="D:\Java\jspWorkspace\Node_Tutorials\REPL_04-1575956691972.png" alt="REPL_04" style="zoom:50%;" />

 변수를 사용하면 값에 대하여 여러가지 형태의 조작이 가능 합니다.

#### 여러줄의 코드 사용

REPL은여러 줄 표현을 지원합니다. 다음의 결과를 확인해 보겠습니다. <img src="D:\Java\jspWorkspace\Node_Tutorials\REPL_05.png" alt="REPL_05" style="zoom:50%;" />

"**...**"은  여는 괄호 후 Enter 키를 누르면 자동으로 나타나며 닫는 괄호를 입력하면 명령이 실행됩니다.  노드는 표현식의 연속성을 자동으로 확인합니다.

#### _의 사용

밑줄 **(_)** 을 사용 하여 바로 직전의  결과를 얻을 수 있습니다.  <img src="D:\Java\jspWorkspace\Node_Tutorials\REPL_06.png" alt="REPL_06" style="zoom:50%;" />



## REPL 명령

- **ctrl + c-** 현재 명령을 종료합니다.
- **ctrl + c를 두 번** -노드 REPL을 종료합니다.
- **ctrl + d-** 노드 REPL을 종료합니다.
- **위 / 아래 키** -명령 기록을보고 이전 명령을 수정합니다.
- **탭 키** -현재 명령 목록.
- **.help -** 모든 명령 목록
- **.break-여러 줄** 표현에서 나갑니다.
- **.clear-여러 줄** 표현에서 나갑니다.
- **.save filename** - 현재 Node REPL 세션을 파일로 저장합니다.
- **.load filename** - 현재 Node REPL 세션에서 파일 내용을로드합니다.



