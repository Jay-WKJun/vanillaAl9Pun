// 입력: [img12.png, img10.png, img02.png, img1.png, IMG01.GIF, img2.JPG]
// 출력: [img1.png, IMG01.GIF, img02.png, img2.JPG, img10.png, img12.png]

// 입력: [F-5 Freedom Fighter, B-50 Superfortress, A-10 Thunderbolt II, F-14 Tomcat]
// 출력: [A-10 Thunderbolt II, B-50 Superfortress, F-5 Freedom Fighter, F-14 Tomcat]

const files1 = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
const files2 = ['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'];

function solution(files) {
  const list = files.map(item => {
    return item.split(/(\d{1,5})/);
  });

  list.sort((a, b) => {
    if (b[0].toUpperCase() > a[0].toUpperCase()) {
      return -1;
    }
    if (b[0].toUpperCase() < a[0].toUpperCase()) {
      return 1;
    }
    if (Number(a[1]) < Number(b[1])) {
      return -1;
    }
    if (Number(b[1]) < Number(a[1])) {
      return 1;
    }
    return 0;
  });

  const answer = list.map(item => item.join(''));

  return answer;
}

solution(files1);
solution(files2);