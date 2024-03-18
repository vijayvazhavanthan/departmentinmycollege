        let a=0;
        function content(){
            
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="future()">X</div></div>
                
                <!--edit-->
                <div class="tab-pane fade active in" id="tab5">
                                      <h2> Course Content</h2>
                                     <p>
                                  The B.Sc. Computer Science syllabus has been updated every three years by the Board of studies for Computer Science.
                                    At present there are 8 Language papers, 17 Core Computer  papers, 3 Elective papers with Project Work &amp; Viva-Voce, 4 Skill Based Papers, 
                                    2 Non-major Elective papers. In addition, the course has the value added papers viz., Value education,
                                   Environnmental studies, General knowledge &amp; Soft skills.<br>

                                <b>  Theory papers:</b><br>
                            Digital Principles &amp; Applications, Computer Organization, Computer Algorithm, Data Structures, Software Engineering, Computer Graphics, Computer Network, Operating Systems, RDBMS,
                            Web technology, C, C++, Java, Discrete Maths, Operations Research, Numerical Methods, Probability &amp; Statistics, Quantitative Aptitude, Linux Lab,etc.<br>

                            <b> Practical Papers:</b><br>C, C++, Assembly Language, Digital Electronics, Visual Basic, HTML, JAVA, ORACLE, UNIX, VB.NET, etc.,

                            </p><center><font color="#c52e30" size="5px"><b>Semester One</b></font></center><table border="1" class="table table-bordered table-responsive">

                            <tbody><tr><td><b>S.No.</b></td><td><b>Subject Title</b></td><td><b>Subject Code<b></b></b></td></tr>
                            <tr><td>1.</td><td>Tamil / Hindi / Sanskrit</td><td>21 UAC T11 / H11 / S11</td></tr>
                            <tr><td>2.</td><td>English</td><td>21 UAC E11</td></tr>
                            <tr><td>3.</td><td>Programming in C</td><td>21 UCS C11</td></tr>
                            <tr><td>4.</td><td>Lab 1 : Programming in C - Lab</td><td>21 UCS CP1</td></tr>
                            <tr><td>5.</td><td>Discrete Structures</td><td>21 UCS A11</td></tr>
                            <tr><td>6.</td><td>Digital Computer Fundamentals</td><td>21 UCS S11</td></tr>
                            <tr><td>7.</td><td>Value Education</td><td>21 UAC VE1 </td></tr></tbody></table>
                            <br>
                            <center><font color="#c52e30" size="5px"><b>Semester Two</b></font></center><table class="table table-bordered table-responsive">

                            <tbody><tr><td><b>S.No.</b></td><td><b>Subject Title</b></td><td><b>Subject Code<b></b></b></td></tr>
                            <tr><td>1.</td><td>Tamil / Hindi / Sanskrit</td><td>21 UAC T21 / H21 / S21</td></tr>
                            <tr><td>2.</td><td>English</td><td>21 UAC E21</td></tr>
                            <tr><td>3.</td><td>Data Structures And Algorithms</td><td>21 UCS C21</td></tr>
                            <tr><td>4.</td><td>Practical II: Data Structures Using C</td><td>21 UCS CP2</td></tr>
                            <tr><td>5.</td><td>Probability and Statistics</td><td>21 UCS A21</td></tr>
                            <tr><td>6.</td><td>Computer Organization &amp; Architecture</td><td>21 UCS S21</td></tr>
                            <tr><td>7.</td><td>Environmental Studies</td><td>21 UAC ES1</td></tr></tbody></table>
                            <br>
                            <center><font color="#c52e30" size="5px"><b>Semester Three</b></font></center><table class="table table-bordered table-responsive">

                            <tbody><tr><td><b>S.No.</b></td><td><b>Subject Title</b></td><td><b>Subject Code<b></b></b></td></tr>
                            <tr><td>1.</td><td>Tamil / Hindi / Sanskrit</td><td>21 UAC T31 / H31 / S31</td></tr>
                            <tr><td>2.</td><td>English</td><td>21 UAC E31</td></tr>
                            <tr><td>3.</td><td>Object Oriented Programming Using C++</td><td>21UCSC31</td></tr>
                            <tr><td>4.</td><td>Lab – III:Object Oriented Programming Using C++</td><td>21UCSCP3</td></tr>
                            <tr><td>5.</td><td>Operations Research – I</td><td>21UCSA31</td></tr>
                            <tr><td>6.</td><td>Lab 4 : Linux And Shell Programming (SBS)</td><td>21UCSSP1</td></tr>
                            <tr><td>7.</td><td>Office Automation</td><td>21UCSN31</td></tr></tbody></table>
                            <center><font color="#c52e30" size="5px"><b>Semester Four</b></font></center><table class="table table-bordered table-responsive">

                            <tbody><tr><td><b>S.No.</b></td><td><b>Subject Title</b></td><td><b>Subject Code<b></b></b></td></tr>
                            <tr><td>1.</td><td>Tamil / Hindi / Sanskrit</td><td>21 UAC T41 / H41 / S41</td></tr>
                            <tr><td>2.</td><td>English</td><td>21 UAC E41</td></tr>
                            <tr><td>3.</td><td>Programming In Java</td><td>21UCSC41  </td></tr>
                            <tr><td>4.</td><td>Lab – V:Java Programming  </td><td>  21UCSCP4  </td></tr>
                            <tr><td>5.</td><td> Operations Research – II  </td><td>  21UCSA41  </td></tr>
                            <tr><td>6.</td><td>   Lab 6 :Visual Programming   </td><td> 21UCSSP2 </td></tr>
                            <tr><td>7.</td><td>  Introduction to Internet</td><td>21UCSN41</td></tr>
                            <tr><td>8.</td><td>   Extension Activities   </td><td>  </td></tr></tbody></table>
                            <br>
                            <center><font color="#c52e30" size="5px"><b>Semester Five</b></font></center><table class="table table-bordered table-responsive">

                            <tbody><tr><td><b>S.No.</b></td><td><b>Subject Title</b></td><td><b>Subject Code<b></b></b></td></tr>
                            <tr><td>1.</td><td> Relational Database Management System </td><td> 21 UCS C51</td></tr>
                            <tr><td>2.</td><td> Operating System Concepts </td><td> 21 UCS C52 </td></tr>
                            <tr><td>3.</td><td> Software Engineering </td><td> 21UCSC53  </td></tr>
                            <tr><td>4.</td><td> Lab – VII: Open Source Programming using PHP &amp; MYSQL </td><td> 21UCSCP5 </td></tr>
                            <tr><td>5.</td><td> Elective – 1: Data Communication and Computer Networks / PHP Programming / Python Programming / Artificial Intelligence</td><td>21UCSE51 / 21UCSE52 / 21UCSE53 / 21UCSE54 </td></tr>
                            <tr><td>6.</td><td> Quantitative Aptitude</td><td> 21UCSS51</td></tr>
                            <tr><td>7.</td><td> Lab – VIII:SQL and PLSQL</td><td> 21UCSSP3 </td></tr></tbody></table>
                            8. Soft Skills (Self–Study) 21USSY51 
                            <center><font color="#c52e30" size="5px"><b>Semester Six</b></font></center><table class="table table-bordered table-responsive">

                            <tbody><tr><td><b>S.No.</b></td><td><b>Subject Title</b></td><td><b>Subject Code<b></b></b></td></tr>
                            <tr><td>1.</td>  <td> Data Mining and Warehousing </td><td>21 UCS  C61</td></tr>
                            <tr><td>2.</td><td> Computer Graphics </td><td>21 UCS C62</td></tr>
                            <tr><td>3.</td><td>Lab – IX: Python Programming</td><td>21UCSCP6</td></tr>
                            <tr><td>4.</td><td>Lab – X: Web Design</td><td>21UCSCP7</td></tr>
                            <tr><td>5.</td><td>Elective – 2: Web Technology / Cloud Computing / Machine Learning using Python / Cyber security </td><td>21UCSE61 / 21UCSE62 / 21UCSE63 / 21UCSE64</td></tr>
                            <tr><td>6.</td><td>Project &amp; Viva-Voce</td><td>21UCSEV1</td></tr>
                            <tr><td>7.</td><td>General Knowledge </td><td> 16 UGK B61</td></tr></tbody></table>

                </div>
            </div>`;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }


        function objectvies(){
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="future()">X</div></div>
               
                <!--edit-->
                        <div class="tab-pane fade active in" id="tab1">
                                                    <div class="media">
                                                
                                                        <div class="media-body">
                                                            <h2>Objectives
                                                            </h2>
                                                            <p>
                                                                    To prepare the students to manage the hardware and software components in a computer independently and to be a programmer, 
                                                                    to take up higher studies in Computer Science/Application and teacher training streams.<br>
                                                                    To motivate the students to pursue higher studies in Computer Science/Computer Application and Management Studies in well reputed institutions.<br>
                                                                    To train the students with both theoretical and practical knowledge as per the curriculum. 
                                                            </p>
                                                        </div>
                                                    </div>
                        </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }


        function eligibility(){
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="future()">X</div></div>
                
                <!--edit-->
                <div class="tab-pane fade active in" id="tab2">
                                        <div class="media">
                                          
                                            <div class="media-body">
                                                 <h2>Eligibility for Admission</h2>
                                                 <p>
                                              Candidates should have passed the Higher Secondary Examination conducted by the Board of Higher Secondary Education, 
                                              Government of Tamil Nadu or any other Examinations accepted by the syndicate as equivalent there to with Mathematics, 
                                              Computer Science as one of the subjects.

                                                 
                                                 </p>
                                            </div>
                                        </div>
                </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }


        function duration(){
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="future()">X</div></div>
                
                <!--edit-->
                <div class="tab-pane fade active in" id="tab3">
                                      <h2>Duration of the Course</h2>
                                        <p> The students shall undergo the prescribed course of study for a period of three academic years.(six semesters).</p>
                </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }


        function features(){
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="future()">X</div></div>
                
                <!--edit-->
                <div class="tab-pane fade active in" id="tab6">
                                      <h2>salient Features</h2>
                                     <p>
                                        a.	Experienced and dedicated staff<br>
                                            b.   Students undertake a Project work &amp; Viva-Voce at the end semester.<br>
                                            c.   Maintaining a Department Library with more than 1500 books.<br>
                                            d.   The Department possess a well equipped Computer Laboratory with 45 computers with a LCD projector fixed for the purpose of  Seminar/Teaching/Guest lecture.<br>
                                            e.   The Dept. itself possess 2 desktop, 2 laptop computers, 2 printers, 1 HP color printer, and one LCD projector used for class room teaching.<br>

                                    </p>
                                    <h3><b>Additional Features</b></h3> <br>
                                                - 75% is the average success rate for the last five years.<br>
                                                - Most of the classes are engaged using LCD Projector with Lap Top Computers.<br>
                                                - Students participate in the Charles Babbage Computer Association activities every year.  <br>
                                                - The e-learning is introduced through ICT <br>
                                                - Every year, 20-25% students are placed in reputed companies. <br>
                                     </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }
        

        function future(){
            
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="future()">X</div></div>

                <!--edit-->
                <div class="tab-pane fade active in" id="tab7">
                                        <h3><b>Future Plans</b></h3><br>
                                        - To conduct Seminar/Conferences at the International level<br>
                                        - To apply for Minor/Major research project.<br>
                                        - To Start M.Phil Computer Science in the Department<br>
                                        - To apply for guideship for guiding Ph.D scholars<br>	
                                        - To upgrade the Department as a Research Centre<br>
                </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        
        }


        function started(){
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="started()">X</div></div>
                
                <!--edit-->
                <div>
                    <div class="get-started center wow fadeInDown animated animated" style=" margin:0px;
                    visibility: visible; background-color: white; padding:20px;">
                        <h2>Department of Computer Science</h2>
                        <p class="lead">
                        <b>   B.Sc (Computer Science) (Aided Course).</b><br>
                            </p><p style="text-align:justify">B.Sc. Computer Science Course was started in the year 1987-88. The Department has produced around 1000(28 batches)
                            Computer Science graduates who are well placed in India and abroad.  The Department has been producing excellent results since its inception. 
                            The Department has been successfully functioning with a well equipped Computer Laboratory with 45 computers with a
                            LCD projector fixed for the purpose of  Seminar/Teaching/Guest lecture and a department library with more than 1500 books.
                            </p><div class="request">
                            <h4><a href="#">Started in 1987-88</a></h4>
                        </div>
                    </div>
                </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }


        function members(){
            if(a===0){
            let html='';
            html=`
            <div class="fullscreen">
                <div class="xx"> <div class="x" onclick="members()">X</div></div>
                
                <!--edit-->
                <div class="col-md-12 wow fadeInDown animated animated" style="visibility: visible;">    
                    <table class="table table-bordered table-responsive"><tbody><tr style="background-color:#c52e30; color:White"><td>Sl.No.	</td><td>Name of the Staff	</td><td>Designation	</td><td> Profile</td></tr>

                        <tr>   <td>1. </td><td><a href="Staffprofile/Aided/bsccomputerscience/VKV3.pdf" target="new">Dr. V.K. VIJAYAKUMAR </a></td><td>	Head &amp; Associate Professor</td><td><a href="Staffprofile/Aided/bsccomputerscience/VKV3.pdf" target="new" "=""><button class=" btn btn-info "><font color="#fff">View Details</font></button></a></td></tr>
                        <tr>   <td>2.</td><td><a href="Staffprofile/Aided/bsccomputerscience/TDV2.pdf" target="new">Dr. T.D. VENKATESWARAN</a></td><td>	Associate  Professor</td><td><a href="Staffprofile/Aided/bsccomputerscience/TDV2.pdf" target="new"><button class=" btn btn-info "><font color="#fff">View Details</font></button></a></td></tr>
                        <tr>   <td>3.</td><td><a href="Staffprofile/Aided/bsccomputerscience/DVJ1.pdf" target="new">Tmt. D.V. JEYANTHI</a></td><td>	Assistant  Professo </td><td><a href="images/DVJ-Resume-2023.pdf" target="new"><button class=" btn btn-info "><font color="#fff">View Details</font></button></a></td></tr>
                        <tr>   <td>4.</td><td><a href="Staffprofile/Aided/bsccomputerscience/kpg1.pdf" target="new">Thiru. K.P. GNANESH</a></td><td>	Assistant  Professor</td><td><a href="Staffprofile/Aided/bsccomputerscience/kpg1.pdf" target="new"><button class=" btn btn-info "><font color="#fff">View Details</font></button></a></td></tr>

                    </tbody></table>
                </div>
            </div>
            `;
            document.querySelector('.js-content').innerHTML=html;
            a=1;
            }else{
                let b='';
                document.querySelector('.js-content').innerHTML=b;
                a=0;
            }
        }