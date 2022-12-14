import React from 'react';
import ChatBot from 'react-simple-chatbot';

class Hello extends React.Component{
  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd({ steps, values }) {
    console.log(steps);
    console.log(values);
    window.parent.postMessage(
      {
        type: "close",
      },
      "*"
    );

  }

  render() {
    return(
      <ChatBot
        handleEnd={this.handleEnd}
        steps={[
          {
            id: "1",
            message: "안녕하세요, 저는 특허 지킴이 챗봇 입니다.\n AI 및 메타버스기반 특허기술거래 플랫폼 접속을 환경합니다.",
            trigger: "2",
          },
          {
            id: "2",
            message:
              "관리자에게 문의하고 싶은 특허기술이 있다면 제가 대신 해결해 드릴게요~",
            trigger: "3",
          },
          {
            id: "3",
            message: "먼저 다음 카테고리중 문의하고 싶은 내용을 선택하세요.",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: "metaverse", label: "메타버스", trigger: "5" },
              { value: "battery", label: "배터리기술", trigger: "6" },
              { value: "car", label: "전기차", trigger: "7" },
              { value: "bio", label: "바이오산업", trigger: "8" },
              { value: "end", label: "종료하기", end: true, },
            ],
          },
          /////////////////////////////////////////////////////////////////// 넓은 범위 카테고리 선택 확인 메시지
          {
            id: "5",
            message: "메타버스를 선택하셨습니다.",
            trigger: "9",
          },
          {
            id: "6",
            message: "배터리기술을 선택하셨습니다.",
            trigger: "10",
          },
          {
            id: "7",
            message: "전기차를 선택하셨습니다.",
            trigger: "11",
          },
          {
            id: "8",
            message: "바이오산업을 선택하셨습니다.",
            trigger: "12",
          },
          /////////////////////////////////////////////////////////////////// 세부 질문 카테고리 안내 메시지
          {
            id: "9",
            message: "메타버스와 관련된 카테고리중 문의하고자 하는 내용을 선택하세요.",
            trigger: "13",
          },
          {
            id: "10",
            message: "배터리기술과 관련된 카테고리중 문의하고자 하는 내용을 선택하세요.",
            trigger: "13",
          },
          {
            id: "11",
            message: "전기차와 관련된 카테고리중 문의하고자 하는 내용을 선택하세요.",
            trigger: "13",
          },
          {
            id: "12",
            message: "바이오산업과 관련된 카테고리중 문의하고자 하는 내용을 선택하세요.",
            trigger: "13",
          },
          /////////////////////////////////////////////////////////////////// 세부 질문 카테고리 선택
          // {
          //   id: "13",
          //   options: [
          //     {
          //       value: "14",
          //       label: "첼린지 전체 현황은 어디서 확인하나요?",
          //       trigger: "14",
          //     },
          //     {
          //       value: "15",
          //       label: "팔굽혀펴기 챌린지 참여는 어디서 할 수 있나요?",
          //       trigger: "15",
          //     },
          //     {
          //       value: "16",
          //       label: "챌랜지의 모든 미션들을 완주하면 어떠한 보상이 주어지나요?",
          //       trigger: "16",
          //     },
          //   ],
          // },
          // {
          //   id: "12",
          //   options: [
          //     {
          //       value: "17",
          //       label: "인바디 전체 현황은 어디서 확인하나요?",
          //       trigger: "17",
          //     },
          //     {
          //       value: "18",
          //       label: "웹에서 사용자가 직접 물알람을 설정할 수 있나요?",
          //       trigger: "18",
          //     },
          //     {
          //       value: "19",
          //       label: "나의 인바디 정보를 다른 유저들과 서로 공유할 수 있나요?",
          //       trigger: "19",
          //     },
          //   ],
          // },
          // {
          //   id: "13",
          //   options: [
          //     {
          //       value: "20",
          //       label: "나의 헬스 캘린더는 어디서 확인할 수 있나요?",
          //       trigger: "20",
          //     },
          //     {
          //       value: "21",
          //       label: "사용자가 직접 캘린더에 일정 등록 및 삭제를 할 수 있나요?",
          //       trigger: "21",
          //     },
          //     {
          //       value: "22",
          //       label:
          //         "앱에 저장된 캘린더 일정들이 웹의 캘린더와 같이 연동되어 볼 수 있나요?",
          //       trigger: "22",
          //     },
          //   ],
          // },
          /////////////////////////////////////////////////////////////////// 챌린지 답변
          // {
          //   id: "14",
          //   message: "챌린지 전체 현황은 내정보에서 확인할 수 있습니다.",
          //   trigger: "23",
          // },
          // {
          //   id: "15",
          //   message:
          //     "팔굽혀펴기 챌린지는 챌린지 목록 리스트에서 팔굽혀펴기 챌린지의 참여하기 버튼을 누르면 참여할 수 있습니다.",
          //   trigger: "23",
          // },
          // {
          //   id: "16",
          //   message:
          //     "챌린지의 모든 미션을 완주하셨다면 저에게 축하 메시지를 들을 수 있습니다.",
          //   trigger: "23",
          // },
          /////////////////////////////////////////////////////////////////// 인바디 답변
          // {
          //   id: "17",
          //   message: "인바디 전체 현황은 내정보에서 확인할 수 있습니다.",
          //   trigger: "23",
          // },
          // {
          //   id: "18",
          //   message:
          //     "아직 웹에서는 물 알람을 사용자가 직접 설정할 수 있는 기능은 없습니다.",
          //   trigger: "23",
          // },
          // {
          //   id: "19",
          //   message:
          //     "현재 저희 웹에서는 사용자간에 인바디 정보를 서로 공유할 수 있는 기능은 없습니다.",
          //   trigger: "23",
          // },
          /////////////////////////////////////////////////////////////////// 캘린더 답변
          // {
          //   id: "20",
          //   message:
          //     "웹 페이지의 두번째 색션에서 캘린더 원에 마우스를 올리면 나의 캘린더를 볼 수 있는 버튼이 있습니다.",
          //   trigger: "23",
          // },
          // {
          //   id: "21",
          //   message: "캘린더에서 사용자가 직접 일정을 추가 및 삭제할 수 있습니다.",
          //   trigger: "23",
          // },
          // {
          //   id: "22",
          //   message:
          //     "현재로서는 앱과 웹의 캘린더가 서로 연동되어 있지 않지만 곧 연동하여 헬스 일정을 앱과 웹에서 모두 확인할 수 있도록 할 예정입니다. \n 자세한 내용은 게시판에 공지하도록 하겠습니다. ",
          //   trigger: "23",
          // },
          /////////////////////////////////////////////////////////////////// 평가 체크리스트
          // {
          //   id: "23",
          //   message: "마지막으로 저의 쳇봇 서비스를 평가 해주세요",
          //   trigger: "24",
          // },
          // {
          //   id: '24',
          //   options: [
          //     { value: '1', label: '1', trigger: '25' },
          //     { value: '2', label: '2', trigger: '25' },
          //     { value: '3', label: '3', trigger: '25' },
          //     { value: '4', label: '4', trigger: '25' },
          //     { value: '5', label: '5', trigger: '25' },
          //   ],
          // },
          {
            id: "13",
            message: "현재 해당 카테고리의 정보를 제공하고 있지 않으나 곧 해당 카테고리 정보를 제공 예정입니다. 자세한 내용은 게시판에 공지하도록 하겠습니다.",
            trigger: '14',
          },
          {
            id: '14',
            options: [
              { value: "end", label: "종료하기", end: true, },
            ],
          }
        ]}
      />
    )
  }
}
export default Hello;
