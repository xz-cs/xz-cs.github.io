const data = {
    versions: ["Older", "4.3", "4.3.1", "4.3.2", "4.4", "4.4.1", "4.4.5", "4.5", "4.5.1", "4.5.2", "4.5.3",
        "4.5.4", "4.6", "4.6.1", "4.6.1-C1", "4.6.1-C2", "4.6.1-C3", "4.6.1-C4", "4.6.1-C5"],

    latest_date: "26 Mar. 2021",

    "Older": "<p>The codes for older version (3.x) can be found " +
        "<a href='https://github.com/xz-cs/web_old_3' target='_blank'>in this archived repository</a> .</p>",

    "4.3": "<ul>\n" +
        "        <li>New 'Fight The Virus' column in the Home tab! Let's fight the coronavirus together!</li>\n" +
        "        <li>Better url parameter handling. Now you can add a 'target' parameter to the index page. Eg:\n" +
        "            xz-cs.github.io?target=schedule .\n" +
        "        </li>\n" +
        "        <li>The tab 'Works' has been renamed to 'Project'. Links to my project on GitHub has been added.</li>\n" +
        "        <li>Big update to the 'About' page which includes Credit information.</li>\n" +
        "        <li>Minor bug fix.</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 09/04/2020 &emsp; </p>",

    "4.3.1": "<ul>\n" +
        "        <li>New credit information and minor bug fix.</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 11/04/2020 &emsp; </p>",

    "4.3.2": "<ul>\n" +
        "        <li>Fixed an incident which led to page errors.</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 12/05/2020 &emsp; </p>",

    "4.4": "<ul>\n" +
        "        <li>Update to 'Schedule' page and version information in 'About' page. Now they are in 'search' style. </li>\n" +
        "        <li>General optimization to details in some pages of the website.</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 24/05/2020 &emsp; </p>",

    "4.4.1": "<ul>\n" +
        "        <li>Update to the link for courses in 'Study' page. </li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 26/05/2020 &emsp; </p>",

    "4.4.5": "<ul>\n" +
        "        <li>Update to the display of courses in 'Study' page. Now they are also in 'search' style and you can apply filters to search for specific courses. </li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 27/05/2020 &emsp; </p>",

    "4.5": "<ul>\n" +
        "        <li>Update to the color effect of left navigation bar. </li>\n" +
        "        <li>Update to the latest news and exam schedule.&emsp; <i>(Links to courses are automatically redirected by CityU)</i></li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 17/07/2020 &emsp; </p>",

    "4.5.1": "<ul>\n" +
        "        <li>Added new course and schedule information for 2020/21 Semester A. </li>\n" +
        "        <li>Minor bug fix.</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 28/07/2020 &emsp; </p>",

    "4.5.2": "<ul>\n" +
        "        <li>Update to course and schedule information for 2020/21 Semester A. </li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 25/08/2020 &emsp; </p>",

    "4.5.3": "<ul>\n" +
        "        <li>Update to contact information and news in home page. </li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 06/09/2020 &emsp; </p>",

    "4.5.4": "<ul>\n" +
        "        <li>Update the first news in home page to the latest. </li>\n" +
        "        <li>Added a new funny game. </li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 30/09/2020 &emsp; </p>",

    "4.6": "<ul>\n" +
        "        <li>Update to the style of all links in the site. </li>\n" +
        "        <li>Apply W3.CSS to new UI design of buttons and forms in some pages of the site. </li>\n" +
        "        <li>Update to some details, e.g. scrolling text in home page. </li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 04 Oct. 2020 &emsp; </p>",

    "4.6.1": "<ul>\n" +
        "        <li>Fixed <a href='https://github.com/xz-cs/xz-cs.github.io/issues/1' target='_blank' class='general'>issue #1</a>.</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 09 Oct. 2020 &emsp; </p>",

    "4.6.1-C1" : "<ul>\n" +
        "        <li>Content update 01</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- (Never published) &emsp; </p>",

    "4.6.1-C2" : "<ul>\n" +
        "        <li>Content update 02</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 20 Nov. 2020 &emsp; </p>",

    "4.6.1-C3" : "<ul>\n" +
        "        <li>Content update 03</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 30 Nov. 2020 &emsp; </p>",

    "4.6.1-C4" : "<ul>\n" +
        "        <li>Content update 04</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 18 Jan. 2021 &emsp; </p>",

    "4.6.1-C5" : "<ul>\n" +
        "        <li>Content update 05</li>\n" +
        "    </ul>\n" +
        "    <p style=\"text-align: right;\"> -- 26 Mar. 2021 &emsp; </p>",

}
