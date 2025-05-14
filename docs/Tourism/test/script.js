var userChoices = {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: ''
    };

     function nextQuestion(nextSectionId, questionNumber, answer) {
            // 儲存使用者選擇
            userChoices['question' + questionNumber] = answer;

            // 顯示下一題
            document.querySelector('.question.active').classList.remove('active');
            document.getElementById(nextSectionId).classList.add('active');

            // 如果是最後一題，顯示結果
            if (nextSectionId === 'result') {
                finishQuiz(questionNumber, answer);
            }
        }

        function finishQuiz(questionNumber, answer) {
            userChoices['question' + questionNumber] = answer;
            document.querySelector('.question.active')?.classList.remove('active');
        
            let resultImageSrc = '';


      if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Frole.png';

      } else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Arole.png';

      } else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
         resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'a' && userChoices.question3 === 'c' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Arole.png';
        
      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Srole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'a' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Brole.png';
      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'a' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
         resultImageSrc  = '../webimg/test/Frole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Srole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'a' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Srole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'b' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Brole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'c' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Srole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'a' && userChoices.question4 === 'c' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'c' && userChoices.question5 === 'a') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }else if (userChoices.question1 === 'b' && userChoices.question2 === 'b' && userChoices.question3 === 'b' && userChoices.question4 === 'c' && userChoices.question5 === 'b') {
        resultImageSrc  = '../webimg/test/Arole.png';

      }

      // 顯示結果圖
    const resultImg = document.getElementById('finalResultImage');
    resultImg.src = resultImageSrc;

    // 顯示結果頁
    document.getElementById('result').style.display = 'block';

    // 動態設定透明按鈕連結
    const resultLink = document.getElementById('resultLink');
    if (resultImageSrc.includes('Frole')) {
      resultLink.href = 'https://cosmozhan.github.io/GraduationPJ/recipechoice-gp/dist/index.html#rankF';
    } else if (resultImageSrc.includes('Arole')) {
      resultLink.href = 'https://cosmozhan.github.io/GraduationPJ/recipechoice-gp/dist/index.html#rankA';
    } else if (resultImageSrc.includes('Brole')) {
      resultLink.href = 'https://cosmozhan.github.io/GraduationPJ/recipechoice-gp/dist/index.html#rankB';
    } else if (resultImageSrc.includes('Srole')) {
      resultLink.href = 'https://cosmozhan.github.io/GraduationPJ/recipechoice-gp/dist/index.html#rankS';
    } else {
      resultLink.href = 'https://example.com/default';
    }
}
