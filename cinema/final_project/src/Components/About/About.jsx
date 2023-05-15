import React from 'react';
import './/About.css';
const About = () => {
    return (
        <>
        <div class="about">
            <div class="About-Us">
                <h2>About QACinemas</h2>
                <p>We are a popular cinema chain hosting films in our 7-screen cinema.
                    This website has been developed by Millie, Sean, Michael and Olivia.
                </p>

                <h2>Our Developers</h2>
                <p>This website has been developed by Millie, Sean, Michael and Olivia.
                    Our team has worked on every aspect, from front-end to back-end, including the
                    implementation of a database.
                </p>
            </div>

            <div class="Scrum">
                <h2>Scrum</h2>
                <div class="s1">
                    <p>
                        Scrum is called scrum because everyone gets together and pushes
                        forward towards a common goal. Software, in most development models,
                        are built in increments; you do a bit, check it, do a bit more, etc.
                        In Scrum, this increment is called a sprint. A single sprint is one
                        increment of a development and is usually a week to two weeks long.
                        On the first day, developers will gather end user requirements and
                        plan the approach to the project based on the assets they have and
                        that which they require. They are to look at what they will do and
                        what they intend to achieve for the end product. Every day, there is
                        a meeting known as a "stand-up". This meeting is a daily review in
                        which each developer will stand up one at a time and discuss what
                        they have done in the previous day, what they will do that day and
                        what issues they may have had. This ensures everyone is on the same
                        page in terms of what they are doing and what those around them are
                        working on, too, allowing for easier and more efficient division of
                        tasks. The main point of this style of meeting is to keep the meeting
                        short, since no one wants to stand up for too long.
                    </p>
                </div>

                <div class="s2">
                    <p>
                        The last day of the project, developers will get together and <b>review
                        and retro</b>. Review refers to the technical side of things while retro is
                        the process side of the development process. Developers, similar to
                        what is discussed in the stand up meetings, look at what they have
                        built, the end product itself, if it is fit for purpose, how it was
                        built and will assess the process they worked through to get it to
                        its final stage.
                    </p>
                </div>

                <div class="s3">
                    <p>
                        The <b>Product Owner</b>, PO, decides what you're working on per sprint,
                        which should be listed in the backlog of a Kanban board, such as
                        Jira. The development team writes the code and attends the daily
                        stand up meetings to discuss their progress frequently and avoid
                        clashing with the work of other developers. The Scrum Master, the
                        Master of the Scrum, facilitiates scrum and ensures it is followed
                        by the team.
                    </p>
                </div>

                <div class="s4">
                    <p>
                        The <b>backlog</b> refers to everything that has to be done for the project
                        to be considered finished. The product backlog is a big list of
                        tasks that are yet to be performed. The sprint backlog is just the
                        list of tasks for this sprint. At the start of a sprint, you will
                        have a large backlog of all the things you need to do. You start off
                        with all the tasks and pull out what needs to be done in the first
                        two weeks, the first sprint, which is based on what is most important
                        and what the goal is for this week. The PO is to decide this. The
                        developer team comes in every day, looks at what tasks are on the
                        backlog, choose a task to complete for the day and work to complete
                        it. The next day, if it failed, you let someone know and continue
                        fixing it, or, if it went well, you continue and pick out another
                        task. This cycle repeats until all work is complete.
                    </p>
                </div>

                <div class="s5">
                    <p>
                        One of the most important parts of managing a backlog is prioritising
                        items. A commonly used standard is <b>MoSCoW</b>.
                    </p>

                    <ul>
                        <li>Mo - Must have, is necessary or required</li>
                        <li>S - Should have, is important but not necessary</li>
                        <li>Co - Could have, is nice but not important</li>
                        <li>W - Would like to have or won't have because of time constraints, out of scope or unable to do</li>
                    </ul>
                </div>

                <div class="s6">
                    <p>
                        Another standard used in Scrum is <b>story points</b>. Two different
                        developers may disagree on ohw long it will take to complete a task
                        as people have different skill sets and tend to work at different
                        paces. To resolve this, instead of measuring in time, we measure
                        in how much effort a task will take.
                    </p>
                </div>

                <div class="s7">
                    <p>
                        For example, a logo may take a certain amount of effort, say 1 story
                        point, and making an about us page could take more effort, say 2
                        story points. If you make two logos, you'd have the same amount of
                        effort as the about us page. We count how many story points we have
                        in total to make an estimate on how long something will take.
                    </p>
                    <p>
                        The equation for this is <i>points / sprint = velocity</i>. For the
                        first sprint, this isn't commonly used and developers tend to dive
                        in without this standard. This provides a point of reference and, by
                        the end of the first sprint, everyone will have a better idea of how
                        long things take and how much effort things take, too. A lot of
                        development teams use a sprint 0 to see how things go and judge how
                        long things will take. A sprint 0 refers to the first sprint in which
                        developers don't use story points to estimate how long a task will
                        take. They spend this first sprint diving in blindly to have a better
                        idea of how much work they can get done in what amount of time.
                    </p>
                </div>

                <div class="s8">
                    <p>
                        <b>User stories</b> are commonly used within Scrum to help construct tasks
                        with end user requirements in mind. It follows a structure of
                        "As a _ I want _ so that _". It enforces developers to consider who
                        wants what, what do they want, why do they want. User stories are
                        designed to be simple, easy to write and read, which is why they
                        are so light on detail. An example of a user story could be "As a
                        customer visiting the website, I would like to see the navigation
                        bar at the top of the page across all pages so that I can easily
                        navigate to other pages". Developers mightn't have considered this
                        as something a user would be interested in or may even need, which
                        is why user stories are vital to developing a product that pertains
                        to the end user requirements discussed. It is highly valuable to
                        consider the needs of a user or to attempt to view the product
                        from the perspective of a user, rather than a developer, something
                        which is often dismissed.
                    </p>
                </div>
                <div class="s9">
                    <p>
                        <b>Acceptance criteria</b> is criteria that show the product is done.
                        They're attached to the user stories, not individual tasks, as
                        previously mentioned. User stories are very high level and have
                        very high level requirements. Examples include:
                    </p>

                    <ul>
                        <li>"Given _"</li>
                        <li>"When _"</li>
                        <li>"Then _"</li>
                    </ul>

                    <p>
                        For example, "Given I am logged in, when I view the account page,
                        then I should see options to change my account details".
                    </p>
                </div>

                <div class="s10">
                    <p>
                        In the backlog, there are a few different names used to refer to
                        everything that needs to be complete.
                    </p>

                    <ul>
                        <li><b>Tasks</b> are smaller than stories and can contain technical details
                        An example may include "User has to be signed in".
                        Subtasks are the tasks of tasks. An example of a subtask,
                        following the previous example of a task, may include "A user's
                        account details, if saved, should be suggested to them as an
                        auto-fill option".</li>
                        <li><b>Stories</b> are user stories, which we have previously discussed.</li>
                        <li><b>Bugs</b> are issues which hinder the project's progress or the
                        progress of a specific task. </li>
                        <li><b>Epics</b> are collections of bugs, stories and tasks. They are
                        used to section a large project into smaller, more manageable
                        sections that aren't as overwhelming to look at. It additionally
                        helps with categorising tasks. If we didn't use epics,
                        a developer working on something else, such as the database,
                        may be looking for a task such as "create relationships between the
                        tables" within a large list of unrelated tasks.</li>
                    </ul>
                </div>

                <div class="s11">
                    <p>
                        <b>Definition of Ready</b>, DoR, refers to setting out when a can
                        be added to a sprint, when a task can be started. It encourages
                        developers to ask how important is it, do they have an estimate of
                        how long it will take and do they have the technical details required
                        to start it.
                    </p>
                    <p>
                        <b>Definition of Done</b>, DoD, refers to setting out the rules for when a task
                        is done, such as when testing is written and passed, when the task has
                        been peer reviewed and documented. You should never put work that
                        depends on other work in the sprint because someone can pick out the
                        prerequisite work before the other.
                    </p>
                </div>

                <div class="s12">
                    <p>
                        The <b>Minimum Viable Product</b>, MVP, is the least you can do to meet
                        the end user requirements. Developers will start out building the
                        simple things needed to make the product work and expand on it
                        later, once everything necessary for it to work has been built.
                    </p>
                </div>

                <div class="s13">
                    <p>
                        <b>Jira</b> is a project management software commonly used to assist with
                        the organisation and management of Scrum projects. It includes
                        a Kanban board to layout tasks into a clear, readable manner, based
                        on if they are to do, in progress or done. The Kanban board is
                        only accessible once items have been added to the backlog. You may
                        add stories, epics or tasks to the backlog, as well as other
                        categories of issues. Features or stories added to the backlog are
                        given an estimate, using story points, and a priority, using MoSCoW
                        priority. To kick off a sprint, the PO, who manages the Jira board,
                        can drag issues into the sprint and start the sprint. It will put
                        it into the Kanban board automatically and from there the PO can
                        move it between the to do, in progress and done sections as needed.
                    </p>
                </div>

                <a href="https://www.scrum.org/resources/what-scrum-module" id="s-link">Scrum Website</a>
            </div>

            <div class="Contact">
                <h3>Contact</h3>
                <p>Millie - @</p>
                <p>Sean - @</p>
                <p>Michael - @</p>
                <p>Olivia - @</p>

                <a href="/contact">Contact QACinemas</a>
            </div>
        </div>


        </>
    );
}
export default About;