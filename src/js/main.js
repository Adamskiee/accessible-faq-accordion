class FaqAccordion {
    constructor() {
        this.elements = {
            content: document.getElementById("content"),
            articles: document.querySelectorAll(".article"),
            icons: document.querySelectorAll(".icon"),
            answers: document.querySelectorAll(".answer"),
            questionBtns: document.querySelectorAll(".question-btn")
        }
        this.init();
    }

    init() {
        this.updateAttributes();
        this.bindEvents();
    }

    updateAttributes() {
        this.elements.articles.forEach((article, i) => {
        const btn = article.querySelector(".question-btn");
        const question = article.querySelector(".question");
        const answer = article.querySelector(".answer");

        const qId = `question${i+1}`;
        const aId = `answer${i+1}`;

        question.id = qId;
        answer.id = aId;
        
        btn.setAttribute("aria-controls", aId);
        answer.setAttribute("aria-labelledby", qId);
        answer.setAttribute("aria-live", "polite");
    });
    }

    bindEvents() {
        this.elements.content.addEventListener("click", (e) => {
            if(e.target.closest(".question-btn")) {
                const btn = e.target.closest(".question-btn");
                
                if(btn.getAttribute("aria-expanded") == "true") return;
                
                this.expandArticle(btn);
                btn.setAttribute("aria-expanded", "true");
            }
        });

        // For better keyboard navigation
        const questionBtns = this.elements.questionBtns;
        questionBtns.forEach((btn, index) => {
            btn.addEventListener("keydown", (e) => {
                let newIndex;
                
                switch (e.key) {
                    case 'ArrowDown':
                        newIndex = (index + 1) % questionBtns.length;
                        questionBtns[newIndex].focus();
                        console.log("arrowdown");
                        break;

                    case 'ArrowUp':
                        newIndex = (index - 1 + questionBtns.length) % questionBtns.length;
                        console.log("arrowup");
                        questionBtns[newIndex].focus();
                        break;

                    case 'Home':
                        questionBtns[0].focus();
                        break;

                    case 'End':
                        questionBtns[questionBtns.length - 1].focus();
                        break;
                }
            });
        });
    }

    collapseArticles() {
        this.elements.questionBtns.forEach(btn => {
            btn.nextElementSibling.classList.add("hidden");
            btn.setAttribute("aria-expanded", "false")
            this.manageIcon(
                btn.querySelector(".plus-icon"),
                btn.querySelector(".minus-icon"))
        })
    }

    // Activate and deactivate specific icon
    manageIcon(activateIcon, deactivateIcon) {
        activateIcon.classList.remove("hidden")
        deactivateIcon.classList.add("hidden")
    }

    expandArticle(currentBtn) {
        this.collapseArticles();

        this.manageIcon(
            currentBtn.querySelector(".minus-icon"),
            currentBtn.querySelector(".plus-icon")
        )
        
        currentBtn.nextElementSibling.classList.remove("hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new FaqAccordion();
})