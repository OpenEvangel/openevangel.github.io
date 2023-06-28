---
title: OSPO 的商业价值 —— 探索为什么组织创建、维持、扩大开源项目办公室
tags: [译道师, OSPO]
date: 2023-6-28
authors: [zRich, nodeyang, voidxb, JuliaZhou2022, winterpi]
---
# The Business Value of the OSPO
# OSPO 的商业价值

## An Exploration of Why Organizations Create, Sustain,
## and Expand Open Source Program Offices (OSPOs)

## 探索为什么组织创建、维持、扩大开源项目办公室（OSPOs）

**MARCH 2023**

Emily Omier, Positioning & Messaging Consultant, Emily Omier Consulting

Chris Aniszczyk, CTO, Cloud Native Computing Foundation

Ana Jiménez Santamaría, OSPO Program Manager, TODO Group

With forewords by Georg Kunz, Open Source Manager, Ericsson,
Leslie Hawthorn, Sr. Manager, Red Hat OSPO and
Kimberly Craven, Sr. Director, Red Hat OSPO, Office of the CTO

**2023年3月** 

Emily Omier，Emily Omir咨询公司定位与信息顾问

Chris Aniszczyk，云原生计算基金会首席技术官

Ana Jiménez Santamaría，OSPO 项目经理，TODO工作组

爱立信开源经理Georg Kunz、Red Hat OSPO高级经理Leslie Hawthorn和首席技术官办公室Red Hat OSPO高级总监Kimberly Craven作序

## Contents

````text
Forewords ............................................................................................................................................3
Introduction.........................................................................................................................................7
Why do we care about how OSPOs contribute to the business? ................................................................................7
Common threads in unique stories ...................................................................................................................................7
Methodology ..........................................................................................................................................................................8
Organization profiles and the relationship with open source......................................................................................8
What can OSPOs do for organizations?.........................................................................................11
The reasons behind starting an OSPO............................................................................................................................11
The OSPO journey.............................................................................................................................16
Overcoming internal obstacles: Culture and education ..............................................................................................16
A strategic relationship with open source ......................................................................................................................17
The different hats of an OSPO .......................................................................................................18
The Counselor ......................................................................................................................................................................18
The Facilitator.......................................................................................................................................................................18
Ensuring OSPO sustainability............................................................................................................................................18
Measuring an OSPO’s success.........................................................................................................19
Common OSPO KPIs ...........................................................................................................................................................19
The KPI search..................................................................................................................................................................... 20
Conclusion..........................................................................................................................................21
What’s coming in the future? ............................................................................................................................................21
Future research....................................................................................................................................................................21
About the authors .............................................................................................................................................................. 22
````
## 目录

````text
序 ................................................................................3
简介............................7
为何我们关注OSPOs的商业贡献？ ..................................7
独特故事的共同脉络 ................................................7
方法论 .............................................................8
组织简介以及其与开源的关系..................................................................8
OSPOs可以为组织做什么？...........................................11
开启一个OSPO的原因......................................................................11
OSPO之旅........................................16
克服内部阻碍：文化和教育 ..............................................16
与开源之间的战略关系 ...................................17
OSPO的不同角色 ..................................18
顾问 .................................18
推动者........................................18
确保OSPO的可持续性.........................................................18
评估一个OSPO的成功..................................................19
常见的OSPO KPIs ..........................................................19
KPI搜索................................................................. 20
结论....................................................21
展望未来 ......................................................21
后续研究....................................................................21
关于作者 ..................................................................... 22
````

## Forewords

## 序

Open source software continues to transform how entire industries create and use software. Across industries, systems built to a large degree or even entirely from open source software components that communicate via open APIs are replacing proprietary and closed software stacks. Based on collaboration and joint development, open source software has become a fundamental means for driving innovation, fostering technology adoption, and openly sharing knowledge.

开源软件继续改变着整个行业创建和使用软件的方式。在各个行业中，在很大程度上甚至完全由通过开放API沟通的开源软件组件构建的系统正在取代专有和封闭的软件堆栈。基于协作和联合开发，开源软件已成为推动创新、促进技术采用和公开共享知识的基本手段。

While the high-level advantages of open source software are undeniable, it is unfortunately far from simple and straightforward for organizations to leverage those in practice. As the usage of open source software in organizations proliferates and matures, many realize the need for establishing a structured approach to working with open source software. Initially, this need typically emerges from license compliance concerns, but it quickly grows way beyond compliance alone, eventually encompassing business strategy aspects as well.

尽管开源软件的顶层优势是不可否认的，但不幸的是，组织在实践中使用它们远非这么简单直接的事情。随着开源软件在组织中的使用激增和成熟，许多人意识到需要建立一种结构化的方法来使用开源软件。最初，这种需求通常源于许可证合规性问题，但它很快就远远超出了合规性本身，最终也涵盖了商业战略方面。

This report compiles the results of a survey among open source advocates from Open Source Program Offices (OSPOs) across various companies and universities. It provides a broad insight into the motivation behind forming OSPOs and the concrete business value of OSPOs to their respective organizations.

本报告汇集了来自不同公司和大学的开源项目办公室（OSPO）的开源倡导者的调查结果。它为形成OSPO背后的动机以及OSPOs对其各自组织的具体商业价值提供了广泛的视角。

It turns out that, just like open source software itself, OSPOs come in all sorts of shapes and forms. However, irrespective of the concrete implementation of an OSPO, the survey shows that across organizations, the key business value of OSPOs converges toward the same fundamental goals: to establish a framework for an organization’s way of working with open source software and to ensure that open source software is leveraged strategically and well aligned with an organization’s business goals. An OSPO’s responsibilities thereby range from formalizing processes and transforming an organization’s culture to guiding the creation and execution of a long-term open source strategy.

事实证明，就像开源软件本身一样，OSPO有各种各样的形态和方式。然而，无论OSPO的具体实施情况如何，调查显示，在各个组织中，OSPO的关键业务价值指向了相同的基本目标：为组织使用开源软件的方式建立一个框架，并确保开源软件在战略上得到利用，并与组织的业务目标保持一致。因此，OSPO的职责范围从正式化流程和转变组织文化到指导长期开源战略的创建和执行。

Building on the core principles of open source software— collaboration and knowledge sharing—the contributors to this report aim to provide a helpful source of information. It targets both open source champions in organizations who are currently on the journey of establishing an OSPO as well as open source leaders of existing OSPOs, enabling them to clearly define, measure, and communicate the business value of an OSPO.

基于开源软件协作和知识共享的核心原则，本报告的撰稿人旨在提供有用的信息来源。它既针对目前正在建立OSPO的组织中的开源拥护者，也针对现有OSPO的开源领导者，使他们能够清楚地定义、衡量和传达OSPO的商业价值。

**Georg Kunz**

Open Source Manager, Ericsson

**Georg Kunz**

爱立信开源经理

As open source software has achieved ubiquity in the technology arena, more organizations are realizing the benefits of working with open source projects and the communities that build them. To harness this strategic potential of open source, direct investment into engaging with project communities is no longer a nice to have but a requirement. OSPOs, once largely extant only at large technology-focused firms, have proliferated across industries as a locus for starting, standardizing, and scaling an organization’s approach to open source.

随着开源软件在技术领域的普及，越来越多的组织正在意识到与开源项目和构建这些项目的社区合作的好处。为了利用开源的这种战略潜力，直接投资参与项目社区不再是一件好事，而是一种要求。OSPO曾经主要只存在于以技术为重点的大型公司，现在已经在各个行业激增，成为启动、标准化和扩展组织开源方法的场所。

In just the past five years, we have seen OSPOs crop up in the fields of automotive, entertainment, financial services, manufacturing, and even within academia and government bodies. Having an OSPO and accompanying dedicated resources to focus a company’s open source strategy creates a framework for harnessing the best possible outcomes for all players involved. Organizations have a clearer view of the software landscape upon which their businesses depend, maintainers of key software projects have a more direct line into organizations using their works, and external would-be collaborators have a welcoming and well-understood entry point to negotiating with the business.

在过去的五年里，我们看到OSPO在汽车、娱乐、金融服务、制造业领域，甚至在学术界和政府机构中涌现。拥有一个OSPO和相应的专用资源来专注于公司的开源战略，为所有参与者创造了一个利用最佳结果的框架。组织对其业务所依赖的软件环境有了更清晰的了解，关键软件项目的维护者可以更直接地进入使用其作品的组织，外部潜在合作者在与业务谈判时有一个受欢迎且广为人知的切入点。

In this report, you will hear from OSPO leaders across a variety of sectors who will share their journey building open source consumption, contribution, and community engagement strategies for their businesses. You will also learn that each OSPO’s goals, success metrics, and approaches to engagement vary depending upon the drivers for establishing the OSPO, an organization’s maturity level with their open source practice, and how internal champions for the OSPO’s work support its growth and strategy. No OSPO is exactly like another, even as they share many common responsibilities.

在本报告中，您将听到来自各个行业的OSPO领导人的发言，他们将分享他们为企业建立开源消费、贡献和社区参与战略的历程。您还将了解到，每个OSPO的目标、成功指标和参与方法都有所不同，这取决于建立OSPO的驱动因素、组织在开源实践方面的成熟度水平，以及OSPO工作的内部支持者如何支持其发展和战略。没有一个OSPO与另一个完全相同，尽管它们有许多共同的责任。

Across our combined 30+ years of experience working in open source, the common thread we’ve seen that unites all OSPOs is their deep value in enabling collaboration and co-creation, whether that’s internally amongst different software teams or competitors working together in an upstream community. OSPOs are one of the few teams with a clear mandate for bi-directional advocacy, both within the organization— establishing norms for engaging with open source projects and championing open source best practices—and externally to the organization, ensuring that a company’s actions in a particular community both serve business goals and advance the technical state of the art for all players.

在我们30多年的开源工作经验中，我们看到的将所有OSPO团结在一起的共同点是，无论是在不同的软件团队内部，还是在上游社区中合作的竞争对手之间，它们在实现协作和共同创建方面都有着深刻的价值。OSPO是少数几个明确授权双向倡导的团队之一，无论是在组织内部，还是在组织外部，都要建立参与开源项目和倡导开源最佳实践的规范，确保公司在特定社区的行动既有助于实现商业目标，又能提高所有参与者的技术水平。

It is precisely because of the flexibility and bi-directional nature of the OSPO’s mission that these groups can be the foundational strategic lynchpin of a business’s technology approach. OSPOs have the freedom to explore and support innovations for the business and to define how this engagement will work to best satisfy the objectives of all players, from engineering talent to business executives to the open source project community itself. OSPOs act as the conduit and connective tissue between each group of stakeholders, diplomatically ensuring the interests of all parties are heard and considered, and negotiating for the best possible outcomes for all parties collaborating and co-creating together.

正是由于OSPO使命的灵活性和双向性，这些团体可以成为企业技术方法的基本战略关键。OSPO可以自由探索和支持业务创新，并定义这种参与将如何最好地满足所有参与者的目标，从工程人才到企业高管，再到开源项目社区本身。OSPO充当每组利益相关者之间的管道和连接组织，在外交上确保各方的利益得到倾听和考虑，并为各方合作和共同创造尽可能好的结果进行谈判。

It is this inward and outward-facing service mission that is the real magic of the OSPO. In this role, the successful OSPO acts as a diplomat for its organization in the wider world, charged with representing the needs of the business to the community and the community’s needs to the business. OSPOs have a unique role to play as stewards of industry-wide best practices, a locus of collaboration and co-creation, and a conduit for change agency as their company evolves in the ever-changing market landscape.

正是这种内向和外向的服务使命才是OSPO真正的魔力。在这一角色中，成功的OSPO作为其组织在更广泛世界的外交官，负责代表社区对企业的需求和企业对社区的需求。随着公司在不断变化的市场格局中的发展，OSPOs作为全行业最佳实践的管理者、合作和共同创造的场所以及变革机构的渠道，可以发挥独特的作用。

For those who have worked in the open source space for the past decades, or for readers who are early in their open source journeys, this whitepaper will present key areas of challenge and opportunity for the OSPO, shared from senior OSPO leaders across a variety of industries. Wherever you may be in your OSPO journey, from having one lone staffer who focuses on open source software license compliance to having a long-established open source strategy, we hope you will find this research valuable in examining the business value of OSPOs for your enterprise. As you examine the findings from open source leaders in a variety of industries, we hope you will see yourself in their journeys and be inspired. We look forward to your organization joining the community of OSPO practitioners contributing to the very foundations of open source practice: how we work together, what we do together, and how we all can derive mutual benefit.

对于那些在过去几十年中一直在开源领域工作的人，或者处于开源之旅早期的读者，本白皮书将介绍OSPO面临的挑战和机遇的关键领域，并由各个行业的OSPO高级领导人分享。无论您身处OSPO之旅哪个阶段，从拥有一名专注于开源软件许可证合规性的员工，到拥有一个长期建立的开源策略，我们希望您能发现这项研究对检验OSPO对您的企业的商业价值有价值。当你审视各个行业开源领导者的发现时，我们希望你能在他们的旅程中看到自己，并受到启发。我们期待您的组织加入OSPO从业者的社区，为开源实践的基础做出贡献：我们如何合作，我们一起做什么，以及我们如何获得互利。

**Kimberly Craven**

Sr. Director, Red Hat Open Source Program Office,
Office of the CTO

**Kimberly Craven**

首席技术官办公室，Red Hat开源项目办公室，高级主任

**Leslie Hawthorn** 

Sr. Manager, Red Hat Open Source Program Office

**Leslie Hawthorn** 

Red Hat开源项目办公室，高级经理

**The Business Value of the OSPO**

|      |      |      |
|---------------- | --------------- | --------------- |
|  **OSPOs are built to help students and researchers** create and advance open source projects for widespread use   | OSPOs are used to **produce knowledge for social good** through open access to research   | **OSPOs drive** compliance, standardization, reputation, knowledge sharing, development speed, security, and sustainability    |
| **ACADEMIC OSPO VALUE**    | **ACADEMIC OSPO MOTIVATION**    | **BUSINESS OSPO VALUE**   |
| **Many OSPOs start by cleaning up** past ad-hoc open source efforts   | **The most common internal OSPO challenges** include culture, education, defining and measuring success   | The top KPIs that OSPOs measure include **sustaining contributors and project success**  |
| **MINIMUM VIABLE OSPO**   | **OSPO CHALLENGES**   | **OSPO MEASUREMENT**  |
| Tracking project health – including commits, maintainers, and contributor activity and diversity –**is essential for sustainability**   | **OSPOs can help to turn projects** from cost centers to profit centers   | The most common OSPO skill sets include **counselor, facilitator, environmentalist, and advocate**   |
| **OSPO MEASUREMENT**    | **BUSINESS OSPO SUSTAINABILITY**   | **OSPO ROLES**  |

**OSPO 的商业价值**

|      |      |      |
|---------------- | --------------- | --------------- |
|  **建设 OSPO 旨在帮助学生和研究人员**创建并推进开源项目，使其被广泛应用   | 通过开放研究，OSPO 可以用于**创造社会公益知识**    | **OSPO 推动** 企业的合规性、标准化、声誉、知识共享、开发效率、安全性和可持续性    |
| **OSPO 对学术的价值**    | **OSPO 的学术动机**   | **OSPO 对企业的价值**    |
| **许多 OSPO 项目始于清理**过去的临时性的开源工作   | **最常见的内部 OSPO 挑战** 包括文化、教育，以及对 OSPO 的定义和成功的度量   | 度量 OSPO 的首要 KPI 包括**持续贡献者人数和项目成功与否**   |
| **最小可行的 OSPO**   | **OSPO 的挑战**   | **OSPO 的度量方式**   |
| 跟踪项目的健康度 – 包括代码提交者、维护者以及贡献者的活跃情况和多元性 –**这对可持续发展至关重要**  | **OSPO 可以帮助企业，将项目** 从成本中心转变为利润中心   | 最常见的 OSPO 技能分工包括 **顾问、推动者、环境保护者, 以及布道者**  |
| **OSPO 度量方式**  | **企业 OSPO 的可持续性**   | **OSPO 的角色**   |

## Introduction

## 介绍

### Why do we care about how OSPOs contribute to the business?

### 我们为什么关心OSPO如何为业务提供助力？

>A [well-designed OSPO is the center of competency](https://github.com/todogroup/ospodefinition.org) for an organization’s open source operations and structure.

>对一个组织的开源运营和结构来说，一个[设计良好的开源项目办公室(OSPO)是核心竞争力](https://github.com/todogroup/ospodefinition.org)。

Why do we need to understand how OSPOs contribute to business goals? Whether it’s to advocate for creating a new OSPO, continue funding the OSPO, or even expand the OSPO, champions will ultimately have to connect the dots between the OSPO and business objectives. Whether in a for-profit business or not-for- profit university, no initiative that can’t be connected to outcomes that matter to the organization is likely to get greenlighted in the first place, nor survive if they can’t make a business case for their existence.

为什么我们需要了解OSPO如何对业务目标提供助力？无论是为了倡导创建新的OSPO、继续为OSPO提供资金支持，还是为了扩大OSPO，支持者最终必须将OSPO与业务目标联系起来。无论是在营利性企业还是非营利性大学，如果一项提议不能与组织关心的结果联系起来，很可能首先就不会得到批准。如果不能为它们的存在提出商业理由，它们也无法生存下去。

“OSPOs as a whole need to be nimble, they need to be always ready for the next change,” said Suzanne Ambiel, director of open source marketing and strategy at VMware. “They need to adapt to the business because they’re serving the business as well as the community. As the business changes and morphs, the OSPO needs to do so as well ... It’s really important that an OSPO be very connected to the business and the business strategy.”

”整个OSPO需要保持敏捷性，始终准备着应对下一个变化“，VMware开源营销和战略主管Suzanne Ambiel表示。”他们需要适应业务，因为他们同时服务于业务和社区。随着业务的变化和发展，OSPO也需要进行相应的调整……一个OSPO与业务和业务战略紧密相连是非常重要的。“

Though OSPOs are generally—but not always—located under the chief technology officer (CTO) and include many software engineers, interest in open source and how a company relates to open source is by no means limited to the engineering department. As we found in interviewing OSPO leaders for this report, the OSPO champions in many organizations were executives who saw both opportunities and, in some cases, potential threats from open source that their companies needed to address strategically. In doing this research, we hope to better understand why open source matters strategically to companies and how OSPOs help organizations proactively manage both the opportunities and threats to their particular business from open source.

虽然OSPO通常（但并非总是）隶属于首席技术官(CTO)，并且由许多软件工程师组成，但并不是只有工程部门才对开源及公司如何与开源相关联感兴趣。正如我们在采访本报告的OSPO领导者时发现的，许多组织中的OSPO倡导者是高管，他们看到了开源带来的机会，也看到了某些情况下开源所带来的潜在威胁，他们的公司需要从战略层面解决好这些问题。通过进行这项研究，我们希望更好地理解为什么开源对公司具有战略意义，以及OSPO如何帮助组织积极管理开源给其特定业务所带来的机遇和威胁。

Hiro Fukuchi, senior alliance manager at Sony, gave an example of this executive interest: The OSPO organized a virtual event with an external expert that the company publicized, and many executives from both Japan and the United States attended.

索尼公司高级联盟经理Hiro Fukuchi举出了一个这种高管对开源有兴趣的案例：OSPO组织了一场虚拟活动，并邀请了一位外部专家参加，该公司对此进行了宣传后，来自日本和美国的许多高管都参加了这次活动。

### Common threads in unique stories

### 独特故事中的共同线索

One of the challenges in conducting this research is that while there are certainly common threads, not only is each OSPO unique, but the stories behind their creation in the first place and how they contribute to the organization’s larger goals are also unique. So while we can certainly make some generalizations about why OSPOs matter, who tends to champion them, and how the business value of the OSPO tends to evolve, no two organizations are really alike.

进行这项研究的一个挑战是，虽然肯定存在共同的线索，但每个OSPO都是独特的，而且它们在第一次创建时的故事以及它们如何为组织的更大目标提供助力也都是独特的。因此，尽管我们肯定可以对OSPO的重要性、谁倾向于支持它们以及OSPO的业务价值如何发展做出一些概括，但真正的情况是没有两个组织是完全相同的。

“I was reading the Linux Foundation report that came out a couple of days ago, talking about the different OSPO structures,” said Christine Abernathy, senior director of open source at F5. “What I’ve learned is that they’re not all the same.” Just as OSPOs are all structured differently, there is a lot of diversity in their stated goals and the stories of how they came to be.1

“我正在阅读几天前发布的Linux基金会报告，该报告谈到了不同的OSPO结构”，F5的开源高级总监Christine Abernathy说。“我所学到的是，它们并不都是相同的。”正如OSPO结构都各不相同，它们的既定目标和它们如何成立的故事也存在很多差异。[^1]

[^1] https://www.linuxfoundation.org/research/a-deep-dive-into-open-source-program-offices

[^1] https://www.linuxfoundation.org/research/a-deep-dive-into-open-source-program-offices
  
### Methodology

### 研究方法

For this report, we interviewed 12 OSPO leaders from Europe, Asia, and North America in a variety of industries, including two public universities. All the OSPO leaders interviewed are active in the TODO group. Here are the questions we started with:

为了撰写这份报告，我们采访了来自欧洲、亚洲和北美各行各业（包括两所公立大学）的12位OSPO领导者。所有接受采访的OSPO领导者都活跃在TODO小组中。以下是我们的起始问题：

- How many team members were on the OSPO at launch? How many are there now?

- 在启动OSPO时，团队成员有多少人？现在有多少人？

- What are the rough salary ranges for team members in the OSPO?

- OSPO团队成员的大致薪资范围是多少？

- What background do OSPO team members come from (e.g., engineering, legal, marketing)?

- OSPO团队成员是什么背景（例如：工程、法律、市场营销）？

- What’s your industry?

- 你在什么行业？

- Where is the OSPO located in the organization (e.g.,engineering, legal, marketing)?

- OSPO在组织中属于哪个部门（例如：工程、法律、市场营销）？

- Who was the initial champion for the OSPO?

- 谁是最初的OSPO倡导者？

- How did the champion(s) sell the OSPO internally? What did they say the value of the OSPO would be?

- 倡导者如何在内部推广OSPO？他们说OSPO的价值是什么？

- What outcomes or KPIs were set for the OSPO when it was initially started?

- 在最初启动OSPO时，设置了怎样的目标或KPI？

- How has your understanding of the value of an OSPO, and the specific outcome you expect from your OSPO, changed over time?

- 随着时间的推移，你对OSPO的价值的理解以及你期望从OSPO获得的具体结果发生了怎样的变化？

- Do you expect to get the same business value out of your OSPO in the next five years, or do you expect the value of the OSPO to change?

- 你是否期望在未来五年内从你的OSPO获得相同的商业价值，还是你期望OSPO的价值会发生变化？

- What metrics / measurements were collected to track your progress toward those outcomes? How have these metrics changed over time?

- 你收集了哪些指标/测量结果来跟踪你朝着这些结果的进展？这些指标随着时间的变化发生了怎样的改变？

- What KPIs does your OSPO work toward now? How do you evaluate the OSPO’s success?

- 你的OSPO现在正努力实现哪些KPI？你如何评估OSPO的成功？

### Organization profiles and the relationship with open source

### 组织概况及其与开源的关系

An organization’s relationship with open source, and therefore the value that it will get from an OSPO, does seem to depend on what type of company it is. Organizations that are fundamentally technology companies—whose revenue comes from selling hardware or software—experience both different opportunities and threats from open source than organizations whose revenue comes from selling furniture.

组织与开源的关系，以及它因此将从OSPO获得的价值，似乎取决于它是什么类型的公司。本质上是技术公司的组织——其收入来自于销售硬件或软件——从开源中获得的机会和受到的威胁与收入来自于销售家具的组织有所不同。

#### Technology companies

#### 技术公司

For perhaps obvious reasons, companies whose revenue comes from selling hardware or software see the most direct relationship between open source and their business, and the OSPO is a critical part of managing that relationship.

因为种种显而易见的原因，从销售硬件或软件中获得收益的公司最直接地感受到开源和它们业务之间的关系，OSPO是管理这种关系的关键部分。

“Pat Gelsinger, our CEO at the time,” said Ambiel, referring to who was one of the OSPO champions at VMware. “He’s the one who really leaned in and said, ‘We need to build an OPSO, we need to act with strategic intent.’”

“我们当时的CEO是Pat Gelsinger”，Ambiel指的是VMware的一个OSPO倡导者。“他是真正投入的人，他说，‘我们需要建立一个OSPO，我们需要根据战略意图来行动。’”

The need for technology companies to approach open source strategically is a core reason they all gave for forming an OSPO. And while there was often executive involvement, it would be wrong to characterize OSPOs as a purely top-down initiative or one pushed by management on an unwilling team of engineers. Often individual open source enthusiasts within the companies would push for a more formalized relationship with open source at the same time that executives pushed for a more strategic approach. Creating an OSPO was the obvious next step to meet both stakeholders’ needs.

技术公司需要从战略上对待开源是他们组建OSPO的核心原因。虽然经常有高管参与其中，但不能将OSPO视为纯粹的自上而下的计划，或者是一个由管理层强行推动不情愿参与的工程师形成的团队。通常，在公司内部有一些开源个人爱好者会推动更正式的开源关系，与此同时高管们则推行更具战略性的方法。创建OSPO显然是满足利益双方需求的下一步。

Open source wasn’t new at any of the companies we spoke with. They had all been using open source internally for years—and often had even open sourced internal projects in the past—but they were becoming increasingly aware of how open source developers can be part of the adoption curve for their own products, and as a result, how important a decent reputation in the open source ecosystem can be.

在我们采访的所有公司中，开源并不是什么新鲜事。它们一直在内部使用开源——并且通常甚至过去已经开源过内部项目——但它们越来越意识到，开源开发人员可以成为其产品使用曲线的一部分。因此，在开源生态系统中拥有良好的声誉非常重要。

“F5’s business has been moving from primarily hardware to software as a service,” said Abernathy. “A lot of the people who make purchasing decisions like to ‘try before they buy.’ These could be software developers who gravitate toward open source or even companies and governments who want to see your code in the open so that they can check the vulnerabilities.” So in the case of F5, open source is becoming important not just to how the company makes products but also to sales and marketing efforts. The OSPO is necessary to make sure F5 can leverage open source strategically and make informed decisions in situations where open source is relevant.

“F5的业务正在从主要的硬件转向软件即服务”，Abernathy说，“许多决定购买的人喜欢‘试用后再购买’。他们可能是倾向于开源的软件开发人员，甚至是希望在开放环境中查看代码以检查漏洞的公司和政府人员。” 因此，在F5这种情况下，开源不仅对公司的产品制造方式至关重要，也对销售和营销工作至关重要。为了确保F5能够战略性地利用开源，并在与开源相关的情况下做出明智的决策，OSPO是必要的。

Abernathy, who previously worked in the open source office at Facebook (now Meta), outlined the difference between open source at a place like Facebook and a company like F5. “At Facebook, open source is important,” she said. “But not, like, in terms of revenue. They’re not building an open source product .... So here, it’s easier to start thinking about the ROI of open source in a more direct and meaningful way.”

之前在Facebook（现在是Meta）的开源办公室工作的Abernathy概述了在Facebook和F5这样的公司中的开源之间的区别。“在Facebook，开源很重要”，她说，“但不是在收入方面。他们没有构建开源产品……所以在这里，更容易开始以更直接和有意义的方式考虑开源的投资回报。”

In the case of F5, a major trigger for creating the OSPO was the acquisition of open source company Nginx in 2019. The acquisition meant that the Nginx team both joined F5 and became another voice pushing for an OSPO, which also increased the strategic importance of open source.

在F5这种情况下，创建OSPO的一个主要诱因是在2019年收购了开源公司Nginx。这次收购意味着Nginx团队加入了F5，并成为另一个推动OSPO的声音，增加了开源的战略重要性。

For companies like Aiven, whose core business is tightly related to an open source project or projects, a formalized and strategic approach to open source is perhaps even more critical—but something they still often lack without an OSPO. Josep Prat, open source engineering director at Aiven, said that even given the strategic importance of open source, there was always tension between a need to ship product features and a need to contribute back to open source. When there was an expectation for engineers to contribute to open source in addition to all their other responsibilities, open source contributions would always take a back seat. Because of this tension, Aiven’s executive team decided very early on that there should be a dedicated OSPO whose sole job was to contribute to open source and manage the relationship with the open source communities.

对于Aiven这样核心业务与一个或多个开源项目紧密相关的公司来说，正式地、战略性地走向开源的途径可能更为关键，但通常在没有OSPO的情况下他们仍然缺少这个途径。Aiven的开源工程总监Josep Prat表示，尽管开源的战略重要性很高，但在推出产品功能和回馈开源这两个需求之间总是存在紧张关系。当期望工程师除了履行所有其他职责之外，还要为开源做出贡献时，开源贡献总是被放在次要位置。因此，Aiven的高管团队很早就决定应该有一个专门的OSPO，其唯一的工作就是为开源做出贡献，并管理与开源社区的关系。

In no way is it only open source companies or startups who feel like open source is of massive strategic importance. Chris Xie, head of open source strategy at Futurewei, the U.S.-based research and development arm of Huawei, stated that the company has been aware of both the threat and opportunities from open source for more than two decades, and the OSPO is part of how the company approaches both the threats and opportunities from open source.

并不仅仅是开源公司或初创企业认为开源具有重大战略意义。华为美国研发部门未来维（Futurewei）的开源战略负责人Chris Xie表示，20多年来，公司一直清楚开源带来的威胁和机遇，而OSPO是公司应对开源威胁和机遇的举措之一。

#### End user companies

#### 终端用户公司

After the pure technology companies, there are the tech-forward companies who want to emulate many of what they see happening at pure technology companies, especially in terms of software development. These are companies that get their revenue from something other than selling hardware or software, and who wouldn’t say that building either is particularly core to their business. However, technology is critical to their business operations, and they share a desire to be perceived as a technology company as a means to attract top talent and create new revenue streams. One pattern that appears among these companies is that the OSPO and contributing to open source and releasing open source projects are all part of an effort to change the perception of the company as well as to improve the organization’s ability to deliver high-quality software, faster.

在纯技术公司之后，是那些希望效仿纯技术公司做法（尤其是在软件开发方面）的前沿技术企业。这些公司的收入不是来源于销售硬件或软件，而且他们也不会说构建硬件或软件是他们特别核心的业务。然而，技术对他们的业务运营至关重要，他们希望被视为技术公司，以吸引顶尖人才和创造新的收入来源。这些公司之间出现的一个模式是，OSPO、为开源做贡献和发布开源项目都是为改变公司形象以及提升组织能够更快地交付高质量软件的能力而做出的努力的一部分。

“Spotify has been using and creating open source since the very beginning, but at the same time, we didn’t approach it in a strategic way or consider how it created value for the company,” said Per Ploug, OSPO lead at Spotify. “It is critical for us that open source work is elevated to the same level as internal work, so we consider why we do it and how it brings value, so we ensure our engineers invest their time in projects which have impact.”

“从一开始起，Spotify就一直在使用和创建开源软件，但同时，我们并没有从战略的角度看待它，也没有考虑它如何为公司创造价值，”Spotify的OSPO负责人Per Ploug表示，“对我们来说，将开源工作提升到与内部工作同等的水平是至关重要的，因此我们会考虑为什么要这样做以及它如何带来价值，从而确保我们的工程师将时间投入到具有影响力的项目中。”

>Read [Spotify’s End User Journey Report](https://www.cncf.io/reports/spotify-end-user-journey-report/) as an example of how the company’s open source contributions have benefited themselves and projects they care about.

>阅读[Spotify的《最终用户旅程报告》](https://www.cncf.io/reports/spotify-end-user-journey-report/)，就可以了解该公司的开源贡献如何让他们自己和他们关心的项目受益。

In Spotify’s case, the most visible example of this new approach is Backstage, the company’s big bet on building a commercial offering on top of the successful open source project they donated to the CNCF in 2020. Spotify intends to make their investment into Backstage more self-sustainable and to ensure they stay engaged in the open source community long term. Right now, they have more than 40 people working on Backstage. We have very ambitious plans for Backstage, which include a commercial strategy that can both fund those ambitions and result in a better end product for everyone. The goal is to move open source from a cost center to a profit center.

在Spotify的案例中，这种新做法最显著的例子是Backstage，这是该公司在一个成功的开源项目基础上大胆建立的商业产品，而这个开源项目是由该公司在2020年捐赠给CNCF的。Spotify打算让他们对Backstage的投资更加可持续，并确保他们长期参与开源社区。目前，他们有40多人在开发Backstage。我们为Backstage制定了雄心勃勃的计划，其中包括一项商业策略，既可以为这些雄心提供资金，又能为每个人带来更好的最终产品。其目标是将开源从成本中心转变为利润中心。

“Wayfair is a tech company, and it takes the continuous work of many technologists across numerous disciplines to support our operations and growth,” said Natali Vlatko, global lead, OSPO at Wayfair. “In chats with our former CTO, I stressed that the easiest way for us to genuinely and authentically live that mindset is to build technical products. The surefire way to do that is to build open source and invest back into the open source ecosystem.”

“Wayfair是一家技术公司，需要许多不同领域的大量技术人员持续工作来支持我们的运营和增长，”Wayfair的OSPO全球负责人Natali Vlatko说，“在与我们的前任CTO交谈中，我强调过，对我们来说，真正、真实地实现这种理念的最简单方法就是构建技术产品。确保做到这一点的方法是构建开源并回馈开源生态系统。”

While becoming more tech-company-like is certainly a goal for these companies, it remains a means to an end. In some cases, the ends are clear, and it is often being able to hire the best talent as well as improve the quality of the engineering work in-house. Sometimes, though, even these companies start out believing that open source matters but are unable to articulate exactly why or how open source contributes to engineering or business objectives. The establishment of the OSPO helps them clarify how open source is already benefiting the company and determine how to get even more value from open source.

尽管变得更像技术公司肯定是这些公司的目标，但它仍然是达到目的的手段。在某些情况下，目的是明确的，通常是为了能够聘请最好的人才以及提高内部工程工作的质量。但有时，即使这些公司开始相信开源很重要，却无法清楚地阐明开源为什么会或如何为工程或业务目标提供助力。OSPO的建立有助于他们澄清开源是如何使公司受益的，并确定如何从开源中获得更多价值。

“They had a couple of open source projects that didn’t go anywhere,” said Duane O’Brien, director of open source at Indeed, about what was going on at the company before he joined. No one thought they were massive successes. “I don’t think they had a clear picture of what success meant for themselves,” he said.

“他们有一些开源项目没有得到推广，”Indeed的开源主管Duane O’Brien提到他加入之前公司的情况时说。没有人认为它们是非常成功的项目。他说：“我认为他们对自己的成功没有清晰的认识。”

#### Universities

#### 大学

For universities, the value of open source and the related value of an OSPO to oversee the relationship between open source and researchers at the university is different from for-profit companies. However, they often see open source as a way to further the university’s mission—an opportunity that until very recently was largely missed. “They don’t really have a history of being engaged in open source,” said Carlos Maltzahn, director of the Center for Research in Open Source Software at the University of California Santa Cruz. As a matter of fact, he said, while there have been successful open source projects that have originated at a university, in many cases, it’s been a personal project of an individual student or researcher because most universities have little to no support for turning research products into high-impact open source contributions. That’s something he’d like to change and sees the OSPO as a way to support students and researchers who create open source projects and help more projects cross the chasm from a graduate student research project to something used in the wider ecosystem.

对于大学而言，开源的价值和OSPO管理开源和大学研究人员之间关系的相关价值与营利性公司不同。然而，他们通常把开源看作是进一步推进大学使命的一种方式——这是直到最近才被广泛认识到的机遇。“他们真的没有参与开源的历史”，加利福尼亚大学圣克鲁兹分校开源软件研究中心的主任Carlos Maltzahn说。事实上，他说，虽然有一些成功的开源项目起源于大学，但在许多情况下，这是学生或研究人员的个人项目，因为大多数大学几乎没有任何资源支持可以把研究成果转化为具有重大影响力的开源贡献。他希望改变这种情况，他将OSPO视为支持创建开源项目的学生和研究人员的方式，以帮助更多项目跨越鸿沟，从研究生的研究项目到更广泛的生态系统中的应用。

For Jesus Gonzalez-Barahona, professor at Universidad Rey Juan Carlos in Madrid and head of their open knowledge efforts, open source fits into the larger mission related to expanding access to knowledge. “In all of Europe, especially in Spain, universities are rediscovering this idea that we need to produce knowledge for society,” he said. Open source software, but also open access to research, is a way to fulfill this mission.

对于作为马德里的胡安·卡洛斯国王大学的教授和他们开放知识项目负责人的Jesus Gonzalez-Barahona而言，开源符合与扩大知识获取途径相关的更大使命。他说:“在整个欧洲，特别是在西班牙，大学正在重新发现我们需要为社会生产知识的这个想法。” 开源软件，以及研究的开放获取，是实现这一使命的方式。

## What can OSPOs do for organizations?

## OSPO 可以为企业提供什么？

### The reasons behind starting an OSPO

### 启动 OSPO 项目的理由与动机

As we look at the value that an OSPO provides, there are
two distinct phases. The first phase is the reason behind the OSPO’s creation. The second phase relates to the value that the organization sees as the OSPO matures. In this section, we will address the reasons organizations had for starting the OSPO in the first place and address how the value evolves in a later section. In nearly all cases, there were multiple reasons for starting an OSPO, just as there are multiple reasons for maintaining and expanding the OSPO as it matures. While there can be educational and
social reasons for starting and maintaining an OSPO, this report focuses primarily on the business-related reasons behind having an OSPO, as we have focused the research primarily on for-profit organizations.

我们可以从两个不同的阶段，来审视OSPO所带来的价值，第一阶段是成立OSPO项目的原因，第二阶段是在OSPO成熟时，企业所看到的价值。在本节中，我们将首先讨论组织机构启动OSPO的原因，并在后面的部分中讨论价值如何演变。在多数情况下，启动OSPO的原因很复杂，正如随着OSPO成熟时，维持和扩展OSPO有多种原因一样。虽然启动和维护OSPO项目可能有教育和社会的原因，但本报告主要关注拥有OSPO项目背后的商业相关因素，因为我们的研究主要集中在营利性组织上。

#### Compliance

#### 合规性

The most fundamental reason that organizations start an OSPO is because they are aware that their engineers are using open source, but they don’t know if they’re complying with the projects’ licenses. “Open source is unavoidable,” said Cornelius Schumacher, open source steward at DB Systel, the digital partner of Deutsche Bahn.

组织启动OSPO的最根本原因，是因为他们知道自己的工程师正在使用开源，但不确定他们是否遵守了项目的许可规则。 “开源是不可避免的，”德国铁路（Deutsche Bahn）数字合作伙伴DB Systel的开源项目管理员Cornelius Schumacher说。

**“Open source is unavoidable”**

**“开源是不可避免的”**

Given this reality, DB Systel needed to make an organized, centralized effort to ensure that the company complied with open source license requirements as well as managed potential security issues. “Risk management was not the only reason [for creating the OSPO], but certainly an important part of the decision,” he said.
Because new open source projects are being downloaded and used every day, especially in a large organization, the OSPO’s role is less about conducting a compliance audit and more about putting technology and processes in place to ensure developers are aware of which licenses are or are not acceptable so that it’s easier to conduct compliance audits when necessary.

鉴于这一事实，DB Systel需要进行有组织的集中努力，以确保公司遵守开源许可要求，并管理潜在的安全问题。 “风险管理不是（创建 OSPO）的唯一原因，但肯定是决策的重要组成部分，”他说。 由于每天都有下载和使用新的开源项目，特别是在大型组织中，OSPO的作用与其说是进行合规性审查，不如说是实施技术和流程，以确保开发人员了解哪些许可证可以接受，哪些不可接受，以便在必要时更容易进行合规审查。

#### Building standardized processes around open source
#### 围绕开源构建标准化流程

Related to the compliance issue, there was often also a need to move from an ad hoc way of using open source projects to a more standardized process. “Right now we have too much sprawl across our open source dependencies,” Ploug said. Part of the rationale for creating the OSPO was to streamline those dependencies to avoid having multiple projects that accomplish the same things.

与合规性问题相关，通常还需要从使用开源项目的临时方式转变为更标准化的流程。Ploug说：“现在我们的开源项目依赖规模过于庞大。” 创建OSPO的一部分原因是要简化这些依赖关系，以避免有多个项目执行相同的事情。

**“Right now we have too much sprawl across our open source dependencies”**

**“现在我们的开源依赖规模过于庞大”**

This would make many aspects of open source management easier, from license compliance auditing to security to investing strategically in open source projects that are important to the company’s core process.

这使开源项目管理在许多方面变得更加容易，从许可证的合规性审计到安全性，再到对公司核心流程至关重要的开源项目进行战略性投资。

In addition to building standardized processes around how engineers can use open source, there’s also a need to create standard processes about how engineers can contribute to open source
projects or even create their own projects. In many organizations, these decisions had previously been made between an individual engineer and their manager, the result of which is a blend of approaches and a lack of certainty about what is acceptable.

除了围绕工程师如何使用开源项目以构建标准化流程之外，还需要创建标准流程，规范工程师如何为开源项目做出贡献甚至创建自己的项目。在许多组织中，以前只是由个别工程师和他们的经理之间做出决定就行，其结果是各种方法的混合，不确定最终会出现什么样的结果，以及这个结果是否可以接受。

Often part of an OSPO’s initial mandate is to create policies about both consuming and contributing to open source that are distributed throughout the engineering organization. The goal is to eliminate bottlenecks and confusion for engineers both in using and contributing back to open source.

OSPO的初始任务的一部分，通常是制定关于使用和贡献开源的政策，这些政策贯穿于整个工程团队中。其目标是消除工程师在使用和贡献开源方面的瓶颈和困惑。

#### Improving an organization’s reputation

#### 提升组织的声誉

Improving an organization’s reputation in the open source ecosystem is an important motivator for many companies to create an OSPO.

提升组织在开源生态系统中的声誉是许多公司创建OSPO的重要动力。

**“Our goal was to not only be more strategic and act with intent but also to elevate our reputation in the open source community— to be perceived as and accepted as a responsible, positive contributor to the open source ecosystem,” said Ambiel, of VMware.**

**“我们的目标不仅是让公司更具战略性，有目的地采取行动，还要提升我们在开源社区中的声誉，努力成为为开源生态系统负责任的、积极的贡献者。”VMware 的Ambiel说。**

This is particularly important because if a company shows up to a project without any kind of pre-existing relationship and suddenly needs a new feature, or a bug fixed, that request won’t likely be a priority. Whereas if the company has been consistently investing in being part of the community, when they need something, the community may be more likely to prioritize it.

这一点尤其重要，因为如果一家公司之前没有参与过某个开源项目，就贸然使用它，并且突然需要一个新功能或修复一个bug，那么该请求可能不会作为开源项目的优先事项。 然而如果公司一直致力于成为该社区的一部分，那么当他们需要某些东西时，社区就可能会优先考虑。

“We need to employ people who have commit rights,” said Prat, of Aiven, referring to commit rights on the projects Aiven is built around. The only way to get that is through continual investment in the project, which is why Aiven created an OSPO to ensure the company, and the individuals it employs, are active in the community.

Aiven的Prat说：“我们需要雇用拥有提交权限的人”。他指的是围绕Aiven的项目的提交权。实现这一目标的唯一方法是通过对该项目的持续投资，这就是Aiven创建OSPO的原因，以确保公司及其雇用的个人在社区中活跃。

An OSPO is also a way to share knowledge about how to approach open source. To even be part of the conversation about what it means to use open source strategically, a company probably needs
to establish an OSPO. According to Fukuchi, this knowledge sharing is a big part of the value Sony gets from its OSPO.

OSPO也是一种分享如何使用开源知识的方式。关于战略性地使用开源意味着什么，一家公司想要参与这类话题的讨论，需要建立自己的OSPO。根据Fukuchi的说法，这种知识共享的方式，是索尼从OSPO获得的价值的重要组成部分。

> **Who starts the OSPOs?** 
> 
> **谁启动了OSPO项目**
> 
> While we associate open source with a grassroots effort from individual engineers, the overwhelming trend in the interviews was the support for OSPOs at the executive level. In the case of large technology companies, like VMware and Futurewei, the OSPO champion was the CEO. “The CEO realized, oh, open source is not just about technology,” said Xie, from Futurewei. “It is about business. So they had open source moved into the Chief Strategy Office, which is where we’re now.”

>Even in more grassroots initiatives, high-level buy-in is common. “I went to our former CTO with that idea myself,” said Vlatko, of Wayfair. “He was very supportive and said, ‘Yes, go ahead’ but also was very realistic in the sense of I cannot guide you, I’m not an expert. And I said, ‘That’s okay. I’m the expert.’” The obvious takeaway is that in many companies, a strategic relationship with open source is a high-level business concern, not just a technical problem that a group of engineers should solve.

>虽然我们将开源项目与个别工程师的基层努力联系在一起，但采访中的一个重要趋势是管理层对OSPO的支持。如对VMware和Futurewei等大型科技公司而言，OSPO的冠军是CEO。 “CEO 意识到，开源不仅仅与技术有关，”来自Futurewei的Xie说。 “这是关于商业的。 因此他们将开源的管理转移到首席战略办公室，这就是我们现在所在的部门。” 即使在较为基层的倡议中，高层的支持也很常见。 Wayfair的Vlatko说：“我亲自向我们的前任首席技术官提出了这个想法” 。他非常支持并说，“好的，请继续吧，但现实是我不能指导你，因为我不是专家。" 我说：“没关系，我是专家”。显而易见的是，在许多公司里，与开源的战略关系是一个高级业务问题，而不仅仅是一组工程师应该解决的技术问题。

Improving an organization’s reputation is ultimately about being able to work productively with others in the industry as well as being part of the conversation about the direction of key projects. “Growing our reputation allows us to be in larger market conversations in the tech world, where we can then have an impact on products and solutions that are important to us,” said Vlatko, of Wayfair.

提高组织的声誉，最终是为了能够与业内其他人进行富有成效的合作，并成为关于关键项目方向的对话的参与者。Wayfair的Vlatko说：“不断提高我们的声誉，使我们能够在科技界参与更大规模的市场对话，这会对我们的重要的产品和解决方案产生影响。”

#### Expanding access to open knowledge

#### 扩大对开放知识的访问与获取

For universities, an OSPO is a way to increase the impact of research and make it more accessible or useful to the wider community, as well as a way to improve students’ access to knowledge.

对于大学来说，OSPO是一种增加研究影响力的方式，使其更容易被广泛的社区所接受或使用，也是方便学生获取知识的一种方式。

**“If you have students engaged with reproducing the results, there have already been studies that show that there is a huge, much better learning effect compared to just reading papers.”**

**“已经有研究表明，相比于仅仅阅读论文，让学生参与研究重现结果，学习效果要好得多。”**

“It’s a huge difference whether a student can just read a paper, or they can look at the paper, then go on to an associated public git repository and have all the information there to reproduce the experiment,” said Maltzahn, of UC Santa Cruz. “If you have students engaged with reproducing the results, there have already been studies that show that there is a huge, much better learning effect compared to just reading papers.” This is important for student retention. Many students leave computer science prematurely because they get too frustrated by the steep learning curve of getting brittle experimental systems to work in computing environments even experts don’t fully understand. Incorporating the practicality of open source into how students learn and reducing the frustration they experience can help them be successful with computer science in the short term and software development in the long term.

加州大学圣克鲁斯分校的Maltzahn说：“相对于只让学生阅读一篇论文来说，如果不仅可以查看论文，还可以访问相关的公共git代码库，在那里获得更多信息来重现实验，这两种方式的结果差异很大” 。 “已经有研究表明，与仅仅阅读论文相比，让学生参与重现结果，学习效果要好得多”。这对于留住学生很重要。许多学生过早地离开了计算机科学，因为他们对陡峭的学习曲线感到非常沮丧，因为要在脆弱的实验环境中工作，而有时候这些环境连专家都不能完全理解。将开源的实用性融入学生的学习方式，减少他们的挫败感，可以帮助他们在短期内获得学习计算机科学的成功，在长期内获得软件开发的成功。

#### Improving development velocity

#### 加快开发的速度

No one starts building a product by creating an operating system—nothing would ever get built.

没有人构建产品的第一步是创建操作系统，这样的话什么都做不出来。

**“There are parts of our products that consist almost entirely of open source software, and that is a fundamental change in the long history of Ericsson,” said Georg Kunz, open source manager at Ericsson.**

**爱立信开源经理Georg Kunz说：“我们一些产品几乎完全由开源软件组成，这是爱立信悠久历史中的一个根本性变化。”**

Not only does an OSPO bring order to how the company is consuming open source projects, but it can also provide guidance about which projects to use.

OSPO不仅可以规范公司使用开源项目的行为秩序，还会提供使用哪些项目的相关指导意见。

#### Improve access to talent

#### 改善获取人才的渠道

There are two ways that open source improves access to talent. The most obvious way is by allowing organizations to hire higher caliber engineers, either by improving their general reputation in the open source world or even by creating their own open source projects and hiring from the pool of people who become active in those projects’ communities. “My boss and executive sponsor want to know that we have a healthy relationship with the open source community because we need to hire from it,” said O’Brien, of Indeed.

开源提供两种方式以改善企业对人才的获取。最显而易见的方式是，让企业雇用更高水平的工程师，比如提升企业在开源世界的声誉，或企业自己创建开源项目，从项目社区的活跃人群中招聘。Indeed的O'Brien说：“我的老板和公司赞助商，他们想知道我们与开源社区有着健康的关系，因为我们需要从中招聘人才” 。

**“One of the biggest challenges we have— like other IT companies—is finding people to do all the software work”**

**“与其他IT公司一样，我们面临的最大挑战之一，是寻找人员来完成所有软件工作”**

The other way an OSPO, and the strategic approach to open source that comes with it, can improve access to talent is by creating open source projects that solve an organization’s problems, particularly when solving problems that are common in many organizations, and solving them doesn’t provide any competitive advantage. “One of the biggest challenges we have—like other IT companies— is finding people to do all the software work,” said Schumacher, of DB Systel. If the company can create an open source project and collaborate with others in the industry, it can leverage tech talent without having to hire more people.

OSPO以及随之而来的开源战略方法为改善获取人才提供了另一种方式，创建开源项目来解决企业的问题，尤其是解决许多企业中常见的问题，解决这些问题并不会提供任何竞争优势。“与其他IT公司一样，我们面临的最大挑战之一，是寻找人员来完成所有软件工作，” DB Systel的Schumacher说。如果公司可以创建一个开源项目并与业内其他企业合作，就可以共享技术人才而无需雇用更多的人。

According to Schumacher, encouraging engineers to both use and contribute to open source is also one way to make them happy and less likely to leave. Similarly, encouraging more engineers to create open source projects and do more work in the open is a way to upskill the workforce you already have.

根据Schumacher的说法，鼓励工程师使用开源，并为开源做出贡献，也是让他们开心并不太可能离开公司的一种方式。同样，鼓励更多工程师创建开源项目并在开放环境中做更多工作，也是提高现有员工技能的一种方式。

“If we are showing our code externally, if we’re showing our technical prowess externally, there is a certain kind of element of needing to put your best foot forward,” said Vlatko, of Wayfair. She says that as Wayfair has encouraged people to work more in the open, they’ve seen code quality and general adherence to best practices improve.

Wayfair的Vlatko说：“如果我们向外展示我们的代码，向外展示我们的技术实力，那么就需要全力以赴。” 她说，由于Wayfair鼓励人们更多地参与开源工作，他们已经看到代码质量有所提高，也开始普遍遵守最佳实践原则。

#### Mitigating risks

#### 降低风险

There are different risks from open source, and a formal OSPO can help mitigate all of them. One reason to formalize the OSPO structure is that one or two engineers are fulfilling an OSPO-like role but without the title or structure. This is what happened at Ericsson. “We basically had a one-person OSPO,” said Kunz.
“He took care of everything, mostly focused on compliance, as many OSPOs start out doing. But obviously, that’s not sustainable. This guy should not get run over by a bus.”

开源会面临对不同的风险，正式的OSPO可以帮助降低这些风险。将OSPO组织结构正式化的原因之一是，一两个工程师正在履行类似OSPO的角色，但没有头衔或组织架构。这就是在爱立信发生的事情。“我们基本上只有一个人的OSPO，”Kunz 说。 “他负责一切，主要关注合规性，正如许多OSPO刚开始做的那样。但显然，这是不可持续的，万一这家伙被公共汽车撞倒了呢？”

Creating the OSPO formalizes what has often happened in an ad hoc way, reducing the reliance on tribal knowledge and lowering the risk that the departure of a single critical person could put the company at risk of legal issues, security incidents, or just being left out of the open source conversation.

创建OSPO以一种特别的方式，将经常发生的事情正式化了，减少了对部落知识的依赖，并降低了单个关键人物的离职使公司面临的法律问题、安全事件或被开源对话排除在外的风险。

#### Security

#### 安全性

Ensuring a company is staying as secure as possible—and particularly understanding the software bill of materials going into both internal and external applications—was a recurrent theme about how the OSPO provides value.

确保公司尽可能保持安全，尤其是了解进入公司内部和外部的应用程序的软件材料清单，是关于OSPO如何提供价值的一个反复出现的主题。

**“We cannot develop our own security framework without being in tune with what’s being developed collaboratively in the community”**

**“如果不与社区中协作开发的内容保持一致，我们就无法开发出自己的安全框架”**

However, the examples were on a strategic, rather than strict implementation, level. “We cannot develop our own security framework without being in tune with what’s being developed collaboratively in the community,” said O’Brien, from Indeed. “Then you take that, and you apply that across every domain.”

然而，这些例子是在战略层面，而不是严格的实施层面。 “如果不与社区中协作开发的内容保持一致，我们就无法开发出自己的安全框架，”来自Indeed的 O'Brien 说。 “然后你会把它应用到每个领域。”

“By design, it’s a distributed problem,” said Kunz, of Ericsson, about software supply chain security. “It’s not the best engineer who will solve this problem, and you can’t solve this problem with an internal process.” It’s something that requires working with others throughout the industry and the open source ecosystem. An OSPO gives organizations a way to do that, even if the OSPO is not ultimately responsible for implementing security processes. They do share best practices and facilitate collaboration among open source communities, industry actors, foundations, and other stakeholders to lift all security boats.

爱立信的Kunz在谈到软件供应链安全时说：“从设计上讲，这是一个分布式问题”。 “不是由最好的工程师来解决这个问题，也无法通过内部流程来解决这个问题。”这需要与整个行业和开源生态系统中的其他人合作。OSPO为组织提供了一种方法来解决这一问题，即使OSPO最终并不负责实施安全流程。OSPO组织可以分享最佳实践，并促进开源社区、行业参与者、基金会和其他利益相关者之间的协作，以提升所有的安全性。

Security is also a reason why organizations want to be involved and respected community members in projects that are strategically important to them. This allows them to be part of the behind-the-scenes conversations not only about any new features in the pipeline but also to learn about any potential security issues first.

安全性也是组织希望参与，并尊重社区成员参与对其具有战略意义的项目的原因之一。 这使他们能够参与幕后对话，不仅涉及协作中的任何新功能，而且还可以提前了解任何潜在的安全问题。

> **Who’s in the OSPO?**
>
> **OSPO 成员**
> 
> The majority of OSPO leaders we spoke to had a software engineering background, but the work most of them do on a day-to-day basis is often not related to writing code. Instead, there are elements of internal communication, strategic planning, analysis, event planning, and collaboration with external organizations, which include open source communities, foundations, and other industry peers.
>
>我们采访过的大多数OSPO领导者都有软件工程背景，但他们中的大多数人的日常工作通常与编写代码无关。取而代之的是内部沟通、战略规划、分析、活动规划以及与外部组织的合作，包括开源社区、基金会和其他行业同行。
>
> In most cases, OSPO team members, and especially OSPO leaders, were senior engineers or at the management level. In companies with very structured salary bands, the OSPO leadership and team members would be toward the top of the salary ladder.

>在大多数情况下，OSPO团队成员，尤其是OSPO领导人，都是高级工程师或管理层。在薪资范围非常结构化的公司中，OSPO领导层和团队成员将处于薪资阶梯的顶端。 考虑到OSPO启动时，对许多组织来说，遵守法律是非常重要的，但值得注意的是，大多数OSPO都可以获得OSPO内部或外部的法律专业知识。没有一个受访者认为，应该扩大法律的作用，或者他们需要额外的法律专业知识。

> Given the importance of legal compliance for many organizations when the OSPO starts, it is notable that most OSPOs had access to legal expertise, either inside or outside the OSPO. However, none of the interviewees felt that there should be an expansion of the role of legal or that they needed additional legal expertise.

>鉴于许多组织在开设开源计划办公室（OSPO）时對法律合规的重要性，值得注意的是大部分OSPO都能够获得法律专业知识，无论是OSPO内部还是外部。然而，采访对象中没有人认为需要扩大法律角色或获得额外的法律专业知识。

#### Sustainability

#### 可持续性

Sometimes open source projects are abandoned, and that can be bad if you depend on them. “If we have a strong dependency on a single maintainer
in Norway, then you should probably do something about the relationship with that person to make sure they stay engaged, either by ensuring that our developers spend time on the projects or by sending some money,” said Ploug, of Spotify. An OSPO both helps identify the risk—otherwise, the fact that it is a single maintainer could be unknown—and identify the best way to mitigate that risk.

开源项目有时也会被放弃，如果你依赖它们，那可能会很糟糕。”Spotify的Ploug说：“如果我们非常依赖挪威的某个项目维护人员，那么可能需要维持与他的关系，以确保他的参与，要么让我们的开发人员花时间维护项目，要么寄钱给他。OSPO既有助于识别风险（比如，你可能都不知道某个项目只有一个人维护）——也能识别减轻该风险的最佳方法。

This precise issue is what led O’Brien, at Indeed, to create the FOSS contributor fund, which is a way for Indeed to financially support maintainers of projects it depends on. The program’s goal is to support maintainers who are at high risk of burnout as a
way to mitigate the risk that the project will end up abandoned.

正是这个问题，促使Indeed的O’Brien创建了FOSS 贡献者基金，这是Indeed为其所依赖项目的维护者提供财务支持的一种方式。该计划的目标是支持那些极有可能精疲力竭的项目维护人员，以减少项目最终被放弃的风险。

## The OSPO journey

## OSPO之旅

The first step for many OSPOs, before they can begin to address more strategic concerns, is what many OSPO leaders described as cleaning up the mess of open source, recovering from years of ad hoc approaches to consuming and contributing to open source.

许多OSPO在解决更战略性的问题之前，第一步是清理开源混乱局面，纠正多年来随意使用开源和为开源做贡献的方式，这是许多OSPO领导者所描述的问题。

“We’ve had 10 years of publishing projects without a longer-term plan or formalized ownership,” said Ploug, of Spotify. The OSPO is currently going through all the projects that the company has created, figuring out who owns them—and making sure that ownership is assigned to a team, not an individual. There is also a process of determining which projects can be shut down, which requires confirming that there is no internal use.

“10年来，我们一直在发布项目，但却没有更长期的计划或正式的所有权”，Spotify的Ploug说。OSPO目前正在审查公司创建的所有项目，弄清楚谁拥有它们——确保所有权归属于一个团队，而不是个人。还有一个确定哪些项目可以关闭的流程，这需要确认内部没有在使用这些项目。

Other work that OSPOs often tackle initially is finite and can, at some point, be finished, such as the initial question about which licenses can or cannot be used. Usually, the OSPO can work with the legal team to figure out what is or is not acceptable, but once there is a decision, it doesn’t need revisiting and becomes a matter of communicating to the entire organization what licenses are acceptable in which scenarios.

OSPO最初经常处理的其他工作是有限的，某些情况下可以处理好一些初始问题，比如哪些许可证可以使用、哪些不行。通常，OSPO可以与法务团队合作，确定哪些是可接受的、哪些不是，而一旦做出决定，就不需要再次讨论，而是变成了一个与整个组织沟通的问题，即在哪些场景中可以接受哪些许可证。

But what do organizations do once they have already organized their internal projects, developed frameworks for how to use and contribute to open source, and sufficiently addressed compliance?

但是，当组织已经组织好了其内部项目，制定了如何使用开源和为开源做贡献的框架，并能充分解决合规问题时，它们该做什么呢？

### Overcoming internal obstacles: Culture and education

### 克服内部障碍：文化和教育

Once an OSPO has developed policies around using and contributing to open source, a common next step is to spread the word internally. This is not a trivial consideration, especially given that many OSPOs are only a handful of people in an organization with thousands or even tens of thousands of engineers. This internal communication role of the OSPO also goes back to one trigger for creating the OSPO in the first place: a large number of queries coming from software engineers about how to relate to open source.

一旦一个OSPO制定了关于使用开源和为开源做贡献的政策，通常要做的下一步是在内部传播这个信息。这不是容易考虑的事，特别是在许多OSPO只有寥寥数人而他们所处的组织有数千甚至数万名工程师的情况下。OSPO的这种内部沟通角色也可以追溯到最初创建OSPO的一个诱因：来自软件工程师关于如何了解开源的大量咨询。

“When we are talking about contributing to open source software, in the beginning, the question we started with was, ‘are we even allowed to do that?’” said Schumacher, from DB Systel. People just did not know what parameters there were about using, and especially around contributing back to, open source. If one of the first-level goals of an OSPO is to figure out what those parameters are, the secondary goal is to make sure that there is a dissemination of knowledge throughout the organization.

“当我们谈论为开源软件做贡献时，一开始我们要解决的问题是：‘我们是否被允许这样做？’”来自DB Systel的Schumacher说。人们不知道使用开源软件的规范是什么，特别是关于向开源软件做贡献的规范。如果OSPO的第一层目标是确定这些规范，那么第二层目标就是确保在整个组织中传播这些知识。

According to Vlatko, from Wayfair, after setting up an organizational structure in GitHub and figuring out the license types that were acceptable for use, there was an educational campaign to ensure that information was widely known across the organization.

据Wayfair的Vlatko所说，他们在GitHub上设置组织结构并确定了可接受使用的许可证类型后，进行了一项教育活动，以确保该信息在组织内得到广泛传播。

But aside from preemptively answering engineers’ questions about interacting with open source, there is an even larger shift in how people think about open source. “The question has changed a bit from whether or not to do open source to how to do open source strategically,” said Schumacher. “What I’m seeing now, after some time, is that we are looking more into the strategic part of how you can leverage open source, for example, in collaborations with external companies.”

但是除了预先回答工程师有关与开源互动的问题之外，人们对开源的看法发生了更大的变化。“问题已经从是否做开源转变为如何战略性地做开源”，Schumacher说，“在一段时间后，我现在看到的是我们正在更深入地研究如何战略性地利用开源，例如与外部公司合作。”

Even though open source is everywhere, not all organizations have the culture around open source that they want, and opinions about open source are far from universally positive. Some people, from individual contributors to managers and executives, have had bad experiences with open source software or open source communities at some point in their careers, and convincing those people to embrace open source is part of the OSPO’s challenge.

尽管开源无处不在，但并非所有组织都拥有他们想要的开源文化，对于开源的看法也远非普遍积极。有些人，无论是个人贡献者、经理还是高管，在职业生涯的某个阶段都曾经历过与开源软件或开源社区相关的负面经历，说服这些人拥抱开源是OSPO面临的挑战之一。

 “We want to create a cultural mind shift and grow the community around open source,” said Abernathy, at F5. This will be a major driver in helping the company play a larger role in the open source ecosystem. In a real sense, OSPOs seek to improve open source’s reputation within the organization just as much as the organization’s reputation within the open source ecosystem.

“我们希望促进文化思维的转变并扩大开源社区”，F5公司的Abernathy说。这将成为帮助公司在开源生态系统中发挥更大作用的重要驱动力。从实质上讲，OSPO试图提升开源在组织内部的声誉，这跟提升组织在开源生态系统内部的声誉一样重要。

### A strategic relationship with open source

### 与开源的战略关系

There is no doubt that the strategic importance of open source varies depending on the type of company. For a company like Futurewei, open source alternatives to the “black box” solutions it sells are a fundamental threat to the company’s ability to generate revenue. “And how you deal with this as a business, not a technology decision,” said Xie.

毫无疑问，开源的战略重要性因公司类型而异。对于像Futurewei这样的公司来说，开源解决方案可以代替其销售的“黑盒”解决方案，这是一个根本性的威胁，可能影响其创收能力。“怎样解决这个问题是一项商业决策，而不是技术决策”，谢先生说。

In a similar vein, VMware’s Ambiel stated, “At the end of the day, what does VMware do? We sell software. So, our open source investments need to align with our business aspirations.” The OSPO is there to make sure that happens.

同样的，VMware的Ambiel表示，“归根结底，VMware是做什么的？我们销售软件。因此，我们的开源投资需要与我们的业务愿景保持一致。” OSPO的作用就是确保这一点。

At Spotify, there’s an ambition to spin out the company’s two most successful open source projects into separate business units that will launch commercial products based on the projects, turning the project from a cost center to a profit center. Part of the OSPO’s role at Spotify is to help identify and launch new projects that could potentially become new business units and support them in a way that increases the likelihood of success.
THE BUSINESS VALUE OF THE OSPO 17

在Spotify，他们希望将公司最成功的两个开源项目分拆成单独的业务单元，基于这些项目推出商业产品，将项目从成本中心变成利润中心。OSPO在Spotify的角色之一是帮助识别和推出可能成为新业务单元的新项目，并以增加成功可能性的方式支持它们。

## The different hats of an OSPO

## 开源办公室的不同角色

### The Counselor

### 顾问

Sometimes a strategic approach just means stepping back and taking the time to think through some of the hard questions about what type of engagement model is right for any particular project or how involved the organization should be in each project. There is also the question of when it makes sense to contribute to an existing project versus creating a new project. An OSPO that is having these strategy-level conversations will be able to provide guidelines to engineers so that engineers do not have to consider the business implications of different open source engagement models every time they try to solve a problem.

战略方法有时候仅仅意味着后退一步，花时间思考那些关于特定项目哪种参与模式是对的或者组织应该在每个项目中参与到什么程度等困难的问题。这在考虑是向已经存在的项目贡献还是新建一个项目时也是一个问题。有战略层对话的开源办公室能够为工程师提供指点，以便工程师每次尝试解决问题时不需考虑不同开源参与模式对业务的影响。

### The Facilitator

### 促进者

The OSPO also plays a sort of translation role between engineering teams and business interests regarding open source. “How do we ensure that engineers keep having the time to do this, that they can actually prove that it makes sense from a business perspective?” said Abernathy, about how communicating the business value of open source is part of the OSPO’s job at F5.
These strategic questions are not always top of mind when the OSPO is first created, especially at less tech-focused companies where open source doesn’t present a direct threat to revenue. But even those companies eventually see that using open source well is about more than mitigating license compliance risk. “Now we are also looking into more cases where it makes sense from a strategic point of view to leverage open source for our own projects or in collaborations with other parties,” said Schumacher, even though he does not think these strategic concerns were as important when the OSPO was initially set up.

开源办公室还在开源相关的工程团队和业务利益之间扮演着一种翻译角色。“我们怎么确保工程师有足够的时间做这些，他们实际上可以从商业的角度证明好处是什么” Abernathy说，如何传达开源的商业价值是 F5 开源办公室工作的一部分。这些开源战略问题并不总是在开源办公室创建时就要考虑的首要问题，特别是开源对收入没有直接威胁的技术不是重心的公司。但是，即使是这些公司最终也会看到良好地使用开源也不仅仅是为了缓和许可证合规风险。“现在我们在更多的情况下研究利用开源为我们自己的项目或者与他方合作的战略意义。” Schumacher 说，即使他不认为这些战略考虑在设立开源办公室时就很重要。

### Ensuring OSPO sustainability

### 确保开源办公室的可持续性

Continuity is an ongoing challenge for organizations as they adapt to changes in the business, the competitive landscape, and the larger technological ecosystem. According to “A Deep Dive on OSPOs,” a Linux Foundation whitepaper, OSPOs need to establish a clear, easy reporting process and ensure lines of communication stay open with all the stakeholders. This is important for maintaining internal support for the OSPO, which is critical to ensuring that the organization continues to follow its agreed-upon open source strategy and is able to work sustainability on open source projects and priorities.[^2]

连续性对组织来说是持续的挑战，因为它们要适应业务，竞争环境和更大的技术生态。根据 Linux 基金会的白皮书《深入开源办公室》，开源办公室需要建立清晰、简单的汇报流程，并确保与所有利益相关方保持沟通渠道畅通。维护开源办公室内部支持对于确保组织继续按照其商定的开源战略和能够在开源项目和优先事项上至关重要。[^2]

[^2]: [A Deep Dive into Open Source Program Offices](https://www.linuxfoundation.org/research/a-deep-dive-into-open-source-program-offices)

## Measuring an OSPO’s success

## 衡量 OSPO 的成功

“When I interviewed for this role, I asked how we’re going to measure success,” Prat said. “They said ‘we don’t know yet.’”

“在我面试这个职位时，我问到我们如何衡量成功”，Prat 说，“他们说‘我们还不知道。’”

This pattern of uncertainty came up often in interviews—that an executive leader championed an OSPO with the understanding that open source is important and that the company needed to take practical, tactical steps to ensure compliance and security, while also figuring out how to engage strategically along the way. In many cases, they did not really know what that looked like, and part of the OSPO’s initial mandate was to figure out what success would look like and how to measure their own progress.

这种不确定的状况在访谈中经常出现 —— 一位高层领导支持 OSPO 并且明白，开源很重要，公司需要采取切实可行的战术行动来确保合规性和安全性，同时也要弄清楚如何在这一过程中进行战略性的参与。在许多情况下，他们真的不知道成功是什么样的，而 OSPO 最初的任务之一是弄清楚成功时的样子以及如何衡量自己的进展。  

There were some metrics interviewees talked about using to measure engagement with open source but then ultimately rejected. Pull requests (PRs), for example, are too diverse to provide meaningful information—a PR could be a typo fix or a major feature. Measuring hours worked on open source also did not seem right because it does not measure impact.

受访者提到了一些衡量开源参与度的指标，但最终没有采纳。例如，提交请求（PR）多种多样，无法提供有意义的信息 —— 一个PR可能是一个拼写错误修复或主要功能。衡量开源工作时间似乎也不正确，因为它不能衡量影响。

Deciding what to measure is fairly high-stakes and strategic, part of why the OSPO leaders themselves took on the task of figuring it out. Human nature is to optimize for the things we know we’re being evaluated on, and interviewees talked about the importance of choosing metrics that will encourage engineers throughout the organization to be better open source citizens. Often the metrics applied initially changed as the OSPO matured. For example, at Indeed, there was an initial focus on growing contributors and measuring how many people make open source contributions in any given quarter. After a while, however, they started focusing on growing what they called “sustaining contributors,” who are people that make repeated contributions to the same project—to projects that are strategically important to Indeed. This is because it is easier for maintainers to get five contributions from one person than five contributions from five people, and the larger goal is to make things easier for maintainers. 

决定衡量什么是相当高风险的和战略性的，这也是 OSPO 领导者自己承担这项任务的原因之一。人类的本性是针对我们所知道的正在评估的东西进行优化，受访者谈到了选择指标的重要性，这些指标将鼓励整个组织的工程师成为更好的开源世界公民。通常，最初应用的指标会随着 OSPO 的成熟而发生变化。例如，在 Indeed，最初的重点是不断增长的贡献者，以及衡量在任意一个季度有多少人做出开源贡献。然而，过了一段时间，他们开始专注于培养他们所说的“持续贡献者”，即那些对同一项目做出持续贡献的人，这些项目对 Indeed 具有重要的战略意义。这是因为维护人员从1个人那里获得5个贡献，比从5个人那里获得5个贡献更容易，更大的目标是让维护人员更轻松。

Oftentimes, it is simply difficult to quantify what matters about an OSPO’s performance in numbers. “My personal measure of success is to continue to elevate VMware’s reputation and leadership in open source,” said Ambiel. “And the measures of success I have for that are fairly qualitative.” She talked about perception studies, share of voice, and times when the community organically shared VMware’s story or contributions. Individually, those metrics might be squishy, but together they “add up to a body of work that says we’re making progress.”

通常情况下，很难用数字来量化 OSPO 的绩效。Ambiel 说：“我个人衡量成功的标准是继续提升 VMware 在开源领域的声誉和领导力。”，“我对成功的衡量标准是相当定性的。”她谈到了认知研究、声量份额，以及社区有机地分享 VMware 的故事或贡献的次数。单独来看这些指标可能不太可靠，但综合起来看，它们“加起来构成了整体的工作，表明我们正在取得进展。”

### Common OSPO KPIs

### 常见的 OSPO KPI

So, what did the OSPOs end up measuring once they had time to consider what metrics encouraged good behavior and were truly aligned with the OSPO’s goals?

那么，一旦 OSPO 有时间考虑哪些指标鼓励了正向的行为并真正符合 OSPO 的目标，他们最终会衡量什么呢？

**Sustaining contributors:** The number of people in the organization who make regular, repeat contributions to the same project, assuming those projects are strategically important to the organization

**持续贡献者：** 则指组织中定期、多次为同一项目做出贡献的人数，假设这些项目对组织具有战略意义。

The success of projects released: The external participation and impact of projects the organization releases. O’Brien gave the example of a project Indeed released that the CNCF Sandbox accepted as a measure of huge success. Maltzahn, from UC
Santa Cruz, mentioned the importance of measuring not just the projects released, but how successful they became at attracting a broader following outside the university and whether they would be viable long term without the continuing involvement of the university.

**已发布项目的成功：** 组织已发布项目的外部参与度和影响。O’Brien 举了一个例子， Indeed 发布的一个项目被 CNCF Sandbox 接受了，这就可以作为一个巨大成功的衡量标准。来自加州大学圣克鲁斯分校的 Maltzahn 提到，不仅要衡量发布的项目的重要性，还要衡量这些项目在吸引大学之外更广泛的追随者方面取得了多大的成功，以及如果没有大学的持续参与，这些项目是否长期发展下去。

**The reputation of open source internally:** Do people even know the OSPO exists? Do they know what the parameters the OSPO has established around how to consume open source, contribute to existing projects, and / or create a new project? Many companies track these internal awareness metrics, as a large part of their role is internal communications.

**开源的内部声誉：** 人们真的知道 OSPO 的存在吗？他们知道 OSPO 围绕如何使用开源、为现有项目做出贡献和/或创建新项目制定了哪些指标吗？许多公司跟踪这些内部认知指标，因为其很大一部分职责是内部沟通。

**The reputation of the organization among the open source community:** For the many companies who established an OSPO as a way to improve the organization’s reputation among the larger open source ecosystem, they often track reputation and awareness metrics, such as social media mentions, the number of job applicants who mention the company’s involvement in open source, or the number of employees speaking at open source-related conferences. Some do surveys of developers run by third parties and ask reputation-related questions.

**该组织在开源社区的声誉：** 对于许多建立 OSPO 以提高该组织在更大的开源生态中的声誉的公司来说，他们通常会跟踪声誉和知名度指标，如社交媒体提及、提及该公司参与开源的求职者数量，或者在开源相关会议上发言的员工人数。一些人通过第三方对开发者进行调研，并提出与声誉相关的问题。

**Reducing friction for developers:** In addition to tracking how aware the internal team is of policies, OSPOs often track how much friction they create for those developers. If a human needs to approve a request to contribute, for example, how long does it take?

**减少开发人员的摩擦：** 除了跟踪内部团队对政策的了解程度外，OSPO 还经常跟踪他们给开发人员制造了多少摩擦。例如，如果一个人申请批准贡献，需要多长时间完成？

**Tracking project health: **Tracking the percentage of projects the organization depends on that are “healthy.” Determining a project’s health would often involve tracking the number of active contributors, the frequency of commits, the number of maintainers, and other metrics, including having users and contributors from many different organizations.

**跟踪项目健康状况：** 跟踪组织所依赖的“健康”项目的百分比。确定项目的健康状况通常包括跟踪活跃贡献者的数量、提交频率、维护者的数量和其他指标，包括来自许多不同组织的用户和贡献者。

**External collaboration:** How many partners is the OSPO actively collaborating with? This can take the form of participation in joint ventures or sponsored programs, particularly among universities, or being actively engaged in open source foundations and industry groups. Other examples of active, external collaborations include participation in conferences as speakers, delegates, or sponsors, as well as engaging in the research development process, as many of the interviewees in this report have demonstrated.

**外部合作：** OSPO 与多少合作伙伴积极合作？这可以采取参与联合投资或赞助项目的形式，特别是在高校之间，也可以积极参与开源基金会和行业团体。积极的外部合作的其他例子包括作为发言人、代表或赞助商参加会议，以及参与研发过程，就像本报告中的许多受访者所展示的那样。

**There are also joint projects to determine the best metrics to track:**
The TODO Group and CHAOSS created the OSPO metrics working group [^3] to help develop better metrics for OSPOs to measure their own success.

**也有一些联合项目来确定要跟踪的最佳指标：**
TODO 小组和 CHAOSS 创建了 OSPO 指标工作组[^3]，以帮助为 OSPO 制定更好的指标，衡量其自身的成功。

[^3]: https://github.com/chaoss/wg-ospo

### The KPI search

### KPI 探索

Many OSPO leaders stressed that talking about quantitative metrics is not only difficult but can lead to misleading conclusions. Many OSPOs just do not have very measurable goals. “Our goals for the team are relatively high level,” said Kunz, from Ericsson.

许多 OSPO 负责人强调，谈论定量指标不仅困难，而且可能导致误导性结论。许多 OSPO 没有非常量化的目标。爱立信的 Kunz 表示：“我们团队的目标相对较高。”

“I would say we step away from numbers,” said Ambiel, from VMware. “Numbers don’t tell the story and can be misleading in open source.”

VMware 的 Ambiel 表示：“我认为我们要远离数字”，“数字并不能说明问题，而且在开源中可能会产生误导。”

Part of the danger in focusing on numbers, Ambiel said, is that the ultimate goal of the OSPO is to push the company to be a better citizen in the open source ecosystem—and being a good citizen is never-ending. “There isn’t a metric where you can say, okay, I’m done. Check that off,” she said. “You can always lean in; you’re always trying to be better.”

Ambiel 说，关注数字的部分危险在于，OSPO 的最终目标是推动公司在开源生态中成为一个更好的公民，成为一个好公民是没有尽头的。她说：“没有一个指标可以让你说，好吧，我搞定了，检查一下”，“你总是可以更进一步，你总是可以努力变得更好。”

There can also be problems with timespans. “Every company tries to measure things in three-month timespans,” said Prat, from Aiven. But an open source maintainer does not care that you need to meet your quarterly goals for accepted contributions; they do not arrange open source projects around quarterly goals or fiscal years.

时间跨度也可能是个问题。“每家公司都试图在三个月的时间跨度内进行衡量，”来自 Aiven 的 Prat 说。但是一个开源维护者并不关心你是否需要达到接受贡献的季度目标；他们不会围绕季度目标或财年安排来计划开源项目。

There was also a sense that OSPOs are continually evolving and, therefore, the right KPIs to track are also constantly evolving. “We are now searching for that good KPI because our activities are changing, and the status quo has changed, so we need to adjust KPIs,” Fukuchi said.

还有一种感觉是，OSPO 正在不断发展，因此，所要跟踪的合适的 KPI 也在不断发展。Fukuchi 说：“我们现在正寻找好的 KPI，因为我们的活动正在变化，现状也发生了变化，所以我们需要调整 KPI。”

> For further reading about OSPO Maturity models, check out these resources here:
> 
> [OSPO Maturity Model](https://8112310.fs1.hubspotusercontent-na1.net/hubfs/8112310/LF%20Research/LFR_LFAID_Deep_Dive_Open_Source_Program_Offices_081922.pdf) (Whitepaper) 
> 
> [OSPO Maturity Model](https://github.com/todogroup/ospology/blob/main/ospo-model/en/five-stage-OSPO-maturity-model.md) (Repo)
> 
> [OSPO Maturity Model](https://blog.opensource.org/what-is-an-open-source-program-office-and-why-you-should-have-one/) (Open Source Blog Article Explained)
> 
> 进一步了解 OSPO 成熟度模型，请参考以下资源：
> 
> [OSPO 成熟度模型](https://8112310.fs1.hubspotusercontent-na1.net/hubfs/8112310/LF%20Research/LFR_LFAID_Deep_Dive_Open_Source_Program_Offices_081922.pdf) (白皮书) 
> 
> [OSPO 成熟度模型](https://github.com/todogroup/ospology/blob/main/ospo-model/en/five-stage-OSPO-maturity-model.md) (仓库)
> 
> [OSPO 成熟度模型](https://blog.opensource.org/what-is-an-open-source-program-office-and-why-you-should-have-one/) (开源博客文章解读)
> 

## Conclusion

## 结论

### What’s coming in the future?

### 展望未来

On one point, there was absolute agreement among all interviewees: OPSOs will continue to evolve in the future. In particular, the more established an OPSO is, the more it can think strategically and help the entire organization develop a more strategic, thoughtful approach to open source. What they do
not need or expect is more focus on legal and compliance—that is a checkbox that most interviewees feel is more like the bare minimum and that they have got it covered already.

有一点是所有受访者都达成了绝对的一致：OSPO 未来将会持续发展。特别是，OSPO 越是成熟，就越能进行战略思考，并帮助整个组织制定一种更具战略意义、更深思熟虑的开源策略。他们并不需要也不期望更多地关注法律合规性，这是一种检查项，但大多数受访者认为这更像是一个最低要求，并且他们已经覆盖了这一方面。

Several interviewees spoke about expecting OSPOs to play a larger role in influencing which technologies and projects their companies adopt in the future. There was also a hope that OSPOs will be able to dive deeper into the dependency chain to better understand which projects they depend on, even if it is two or three levels down, and track the health of those projects (and contribute where necessary). Others talked about building out automated platforms to handle some of the tasks that are now manual, like approving a request to contribute to a project.

几位受访者谈到，希望 OSPO 在影响其公司未来采用的技术和项目方面发挥更大的作用。也有人希望 OSPO 能够更深入地研究依赖关系链，更好地了解他们所依赖的项目，哪怕只是两三级依赖的项目，并跟踪这些项目的健康状况（以及在必要时做出贡献）。其他人谈到了构建自动化平台来处理一些当前手动执行的任务，比如批准贡献项目的申请。

“The OSPO needs to work on a strategy, set it up, and then bring the R&D folks on board to do the right thing,” said Kunz. The OSPO, Kunz and many others believe, should be working on vision and strategy and making sure they’re working with the right people throughout the company to turn that vision into reality.

Kunz 说：“OSPO 需要基于一项战略来开展工作，建立战略并让研发人员参与进来做正确的事情。”。Kunz 及其他许多人认为，OSPO 应该致力于愿景和战略，并确保他们与整个公司的合适人选合作，将愿景变为现实。

Ultimately, part of the OSPO’s role is to have these conversations about open source, OSPOs, and the business value it delivers. That is part of open source evangelism, which is already part of many OSPOs’ mission. “I think an important part of that is really making people understand the business value,” said Schumacher.

归根结底，OSPO 的部分职责是就开源、OSPO 及其提供的商业价值进行对话。这是开源布道的一部分，也已经是许多 OSPO 使命的一部分。Schumacher 说：“我认为这其中很重要的一个部分是让人们真正理解商业价值。”。

That is not always easy because open source does not always translate neatly to the things business leaders think about, but it’s important. Business leaders often know that open source is important, but they need an OSPO to help them understand why and then use that knowledge to get even more value out of
open source.

这通常并不容易，因为开源并不总是能很好地转化为商业领袖的所思所想，但这很重要。商业领袖通常知道开源很重要，但他们需要一个 OSPO 来帮助他们理解为什么，然后利用这些知识从开源中获得更多价值。

### Future research

### 后续研究

In this report, we have focused on the value of the OSPO in private institutions. One area of future research we would like to explore is how OSPOs provide value to governments, from municipalities to supra-national organizations. We would also like to do research that explores the role and the value of OSPOs exclusively at institutions of higher learning. If you have any thoughts about either subject or would like to share your insights, contact us at research@linuxfoundation.org.

本报告中，我们重点关注了 OSPO 在私营机构中的价值。我们未来想探索的研究领域之一是 OSPO 如何为政府提供价值，从市政部门到超大型国家组织。我们还想做一些研究，专门探讨 OSPO 在高等院校的作用和价值。如果您对这两个主题有任何想法或想分享您的见解，请联系我们 research@linuxfoundation.org 。

### About the authors

### 关于作者

**Emily Omier** helps open source startups accelerate community and revenue growth with better positioning and messaging for both open source projects and commercial offerings.

**Emily Omier**通过为开源项目和商业产品提供更好的定位和信息，帮助开源初创公司加速社区和收入增长。

**Ana Jiménez Santamaría** is the OSPO Program Manager at the TODO Group, a Linux Foundation project that brings together OSPO practitioners to collaborate on developing best practices, tools, and educational resources to drive successful Open Source Offices within organizations. Ana has a strong background in Open Source, DevRel, Community Health Analytics and InnerSource. She previously worked at Bitergia, a software development analytics firm, where she completed her MSc in Data Science. Her thesis focused on measuring the success of Developer Relations in Open Source communities. For more details on her thesis work, check out: https:// anajimenezsantamaria.gitlab.io/. With her commitment to open source education, Ana is dedicated to helping organizations and individuals build healthy connections in the Open Source ecosystem. You can find Ana on [Mastodon](https://mastodon.social/@anajsana@fosstodon.org), LinkedIn, and [Youtube](https://www.youtube.com/@anajsana).

**Ana Jiménez Santamaría**是TODO Group的OSPO项目经理，TODO Group是一个Linux基金会项目，将OSPO从业者聚集在一起，共同开发最佳实践、工具和教育资源，以推动在组织内建设一个成功的开源办公室。Ana在开源、技术布道、社区健康分析和内部开源方面有着丰富的背景。她之前在软件开发分析公司Bitergia工作，在那里完成了数据科学硕士学位。她的论文专注于衡量开源社区中开发者关系。有关她的论文工作的更多详细信息，请访问：https://anajimenezsantamaria.gitlab.io/ 。Ana致力于开源教育，致力于帮助组织和个人在开源生态系统中建立健康的联系。你可以在[Mastodon](https://mastodon.social/@anajsana@fosstodon.org)、领英和[Youtube](https://www.youtube.com/@anajsana)上找到Ana。

**Chris Aniszczyk** is an open source technologist with a passion for building a better world through open collaboration. He’s currently a CTO at the Linux Foundation focused on developer experience and running the Cloud Native Computing Foundation (CNCF). In a previous life, he created the Twitter open source program and led their open source efforts. Also, for many years he served on the Eclipse Foundation’s Board of Directors representing the maintainer community and the Java Community Process (JCP) Executive Committee. Furthermore, he’s a partner at Capital Factory where he focuses on mentoring, advising and investing in open source and infrastructure focused startups.

**Chris Aniszczyk**是一位开源技术专家，他热衷于通过开放合作建设一个更美好的世界。他目前是Linux基金会的首席技术官，专注于开发人员经验和云原生计算基金会（CNCF）的运营。在之前的职业生涯中，他创建了Twitter开源项目，并领导了他们的开源工作。此外，他代表维护者社区和Java社区过程（JCP）执行委员会，在Eclipse基金会董事会任职多年。此外，他还是Capital Factory的合伙人，专注于指导、建议和投资开源和基础设施创业公司。

twitter.com/linuxfoundation

facebook.com/TheLinuxFoundation

linkedin.com/company/the-linux-foundation

youtube.com/user/TheLinuxFoundation

twitter.com/todogroup

github.com/todogroup

linkedin.com/company/todo-group

mastodon.world/@todogroup

TODO is a global community of OSPO practitioners from diverse sectors and regions. Its General Members include representatives from 90+ organizations with extensive experience in running successful open source programs. TODO aims to foster collaboration on best practices, tools, and guidance for managing open source projects through OSPOs.

TODO是一个由来自不同部门和地区的OSPO从业者组成的全球社区。其全体成员包括来自90多个组织的代表，他们在成功运行开源项目方面具有丰富的经验。TODO旨在促进通过OSPO管理开源项目的最佳实践、工具和指导方面的合作。

By sharing experiences and developing common tooling, TODO seeks to improve OSPO adoption and education. Explore TODO’s ongoing initiatives like OSPOlogy and active working groups, and check out the OSPO landscape, OSPO 101 training modules, and TODO Guides to learn more.

通过分享经验和开发通用工具，TODO寻求改善OSPO的采用和教育情况。搜索TODO正在进行的行动，如OSPOlogy和活跃的工作组，并查看OSPO全景图、OSPO 101培训模块和TODO指南以了解更多信息。

Founded in 2021, [Linux Foundation Research](https://www.linuxfoundation.org/research) explores the growing scale of open source collaboration, providing insight into emerging technology trends, best practices, and the global impact of open source projects. Through leveraging project databases and networks, and a commitment to best practices in quantitative and qualitative methodologies, Linux Foundation Research is creating the go-to repository for open source insights for the benefit of organizations the world over.

[Linux基金会研究院](https://www.linuxfoundation.org/research)成立于2021年，已在探究开源合作规模的日益扩大，并提供了对新兴技术趋势、最佳实践以及开源项目全球影响的见解。通过利用项目数据库和网络，以及对定量和定性方法论最佳实践的承诺，Linux基金会研究院正在为世界各地的组织创建开源见解的首选存储库。

This report is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International Public License](https://creativecommons.org/licenses/by-nd/4.0/).

本报告根据[CC BY-ND 4.0 License](https://creativecommons.org/licenses/by-nd/4.0/)许可证获得许可。

To reference this work, please cite as follows: Emily Omier, Chris Aniszczyk, and Ana Jiménez Santamaría, “The Business Value of the OSPO: An Exploration of Why Organizations Create, Sustain, and Expand Open Source Program Offices (OSPOs),” forewords by Georg Kunz, Leslie Hawthorn, and Kimberly Craven, The Linux Foundation, March 2023.

引用本文时请注明以下内容：Emily Omier、Chris Aniszczyk和Ana Jiménez Santamaría，“OSPO的商业价值：探索组织为什么创建、维持和扩展开源项目办公室（OSPO）”，Linux基金会，2023年3月Georg Kunz、Leslie Hawthorn和Kimberly Craven 所著的前言。
