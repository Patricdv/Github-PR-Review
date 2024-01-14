// document.addEventListener("DOMContentLoaded", () => {
const body = document.getElementsByTagName('body')[0];

body.insertAdjacentHTML('afterbegin', `
    <div id="pr-review">
        <div>
            <button type="button" class="collapsible">Architecture</button>
            <div class="content active">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="architecture-patterns">
                    <label class="form-check-label" for="architecture-patterns">
                        Follows our architecture patterns?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="architecture-encapsulated">
                    <label class="form-check-label" for="architecture-encapsulated">
                        Is it well encapsulated?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="module-flows">
                    <label class="form-check-label" for="module-flows">
                        Does it impact the flow of other modules/features?
                    </label>
                </div>
            </div>
        </div>

        <div>
            <button type="button" class="collapsible">Implementation</button>
            <div class="content active">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="implementation-requirements">
                    <label class="form-check-label" for="implementation-requirements">
                        Does it meet the requirements in the PTD?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="implementation-dependencies">
                    <label class="form-check-label" for="implementation-dependencies">
                        Does it have unwanted dependencies?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="implementation-performant">
                    <label class="form-check-label" for="implementation-performant">
                        Is it performant?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="implementation-repetitive">
                    <label class="form-check-label" for="implementation-repetitive">
                        Is the code too repetitive?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="implementation-readable">
                    <label class="form-check-label" for="implementation-readable">
                        Is the code readable?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="implementation-implementation">
                    <label class="form-check-label" for="implementation-implementation">
                        Does the logic should be implemented by us? (Does it make sense to be made by senders, client lib or CLIP?) applied here makes sense for us?
                    </label>
                </div>
            </div>
        </div>

        <div>
            <button type="button" class="collapsible">Documentation</button>
            <div class="content active">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="documentation-exists">
                    <label class="form-check-label" for="documentation-exists">
                        If this feature is big enough or adds a complex flow, does it have a docs section?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="documentation-tool">
                    <label class="form-check-label" for="documentation-tool">
                        Does it need a new QA tool?
                    </label>
                </div>
            </div>
        </div>


        <div>
            <button type="button" class="collapsible">Tests</button>
            <div class="content active">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="tests-exists">
                    <label class="form-check-label" for="tests-exists">
                        Is the new feature tested?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="tests-edge-cases">
                    <label class="form-check-label" for="tests-edge-cases">
                        Does it cover the majority of edge cases?
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="tests-automation">
                    <label class="form-check-label" for="tests-automation">
                        Does this affect our automation tests?
                    </label>
                </div>
            </div>
        </div>
    </div>

    <div id="open-pr">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>
    </div>
`);

let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        coll[i].classList.toggle("active");
        let content = coll[i].nextElementSibling;
        content.classList.toggle("active");
    });
}

document.getElementById("open-pr").addEventListener('click', () => {
    document.getElementById("open-pr").classList.toggle('active');
    document.getElementById('pr-review').classList.toggle('active')
});
// });