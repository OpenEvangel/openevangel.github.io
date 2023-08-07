![](media/image1.png)

## PRACTICAL GPL COMPLIANCE

## 实用的GPL合规性

A GUIDE FOR STARTUPS, SMALL BUSINESS AND ENGINEERS

初创企业、小型企业和工程师指南

Copyright © 2017 Linux Foundation

版权所有 @2017 Linux基金会

All rights reserved. This book or any portion thereof may not be reproduced or used in any manner whatsoever without the express written permission of the publisher except for the use of brief quotations in a book review and certain other noncommercial uses permitted by copyright law.

版权所有。未经出版商明确的书面许可，不得以任何方式复制和使用本书或其任何部分，但在书评中使用简短引文和版权法允许的其他非商业用途除外。

Printed in the United States of America First Edition, 2017

美国印刷，2017年第一版

ISBN: 978-0-9989078-0-2

1 Letterman Drive
Building D
Suite D4700
San Francisco CA
94129

莱特曼大道1号，D栋，套房D4700，加利福利亚旧金山，邮编：94129

Phone/Fax: +1 415 723 9709

电话/传真：+1 415 723 9709

<https://linuxfoundation.org>

## About the Authors

## 关于作者

##### ![](media/image4.png)Shane Coughlan

Shane Coughlan is an expert in communication, security, and business development. His professional accomplishments include spearheading the licensing team that elevated Open Invention Network into the largest patent non-aggression community in history, establishing the leading professional network of open source legal experts, and aligning stakeholders to launch both the first law journal and the first law book dedicated to open source. He currently leads the OpenChain community as Program Manager.

Shane Coughlan是通信、安全和业务拓展方面的专家。他的专业成就包括带领许可团队，将开放创新网络(Open Invention Network)提升为历史上最大的专利非侵犯社区，建立领先的开源法律专家专业网络，以及协调利益相关者推出致力于开源的第一本法律期刊和第一本法律书籍。他目前是OpenChain社区的项目经理。

Shane has extensive knowledge of open source governance, internal process development, supply chain management, and community building. His experience includes engagement with the enterprise, embedded, mobile, and automotive industries.

Shane在开源项目治理、内部流程开发、供应链管理和社区建设方面拥有广泛的知识。他的经验在于与企业打交道，包括嵌入式、移动和汽车行业等。

##### ![](media/image5.png)Armijn Hemel

Armijn Hemel is the owner of Tjaldur Software Governance Solutions. He is an active researcher of and internationally recognized expert in open source license compliance and supply chain management. He studied computer science at Utrecht University in The Netherlands, where he pioneered reproducible builds with NixOS. In
the past he served on the board of NLUUG and was a member of the coreteam of gpl-violations.org. Currently he is a board member at NixOS Foundation.

Armijn Hemel是Tjaldur软件治理解决方案的创始人。他是开源许可合规和供应链管理领域的活跃研究人员，也是国际公认的专家。当年他在荷兰乌得勒支大学计算机科学专业学习时，就率先使用NixOS进行可重复的项目构建。过去，他曾在NLUUG董事会任职，并且是gpl-violations.org组织的核心团队的成员之一。现在他是NixOS基金会的董事会成员。

## To Kate, for tirelessly driving the compliance community forward

## 感谢Kate, 感谢她孜孜不倦地推动合规社区向前发展

ARMIJN HEMEL

## To Lana, who has a sense of curiosity that spans the whole world

## 感谢Lana，她拥有跨越全世界地好奇心

SHANE COUGHLAN

# "Don't Panic."

# “不要恐慌。”

DOUGLAS ADAMS

## Introduction

## 简介

Practical GPL Compliance is a compliance guide for startups, small businesses, and engineers, particularly focused on complying with the versions of the GNU General Public License (GPL). It is designed for engineers shipping products with GPL-licensed software included (e.g., consumer electronics, drones, IoT devices). Its goal is to provide practical information to quickly address common issues. It is intended to be useful for solving real-world challenges rather than providing perfection in an imperfect world and to serve as the basis for empowering a compliance engineer or compliance team to get their job done as efficiently as possible. Hopefully, the practices laid out in this guide will assist you in complying with other open source license terms as well.

实用的GPL合规性是针对初创公司、小型企业和工程师的合规指南，特别关注遵守GNU通用公共许可证(GPL)的版本。 它是特意为基于GPL许可发行软件的工程师设计的，主要针对如消费电子产品、无人机、物联网设备等领域。其目的是提供实用信息，以快速解决一些常见问题。它旨在帮助解决真实的问题，而不是在不完美的世界中保证完美，它提供一种基础方案，希望能辅助授权合规工程师或合规团队尽可能高效地完成工作。希望本指南中列出的实践方法也能帮助您遵守其他开源许可条款。

This book begins by introducing the tools used to practice GPL compliance. It then expands on the goals of our approach, and follows with an explanation of how to accomplish those goals. It continues with a "checklist" of pitfalls frequently encountered by compliance engineers and a list of steps that can be applied in common situations when releasing a product or product family. It ends with some handy flowcharts to visualize key approaches or best practices.

本书首先介绍了用于实践GPL合规性的工具。然后它扩展了我们方法的目标，并解释了如何实现这些目标。之后它列出了合规工程师经常会遇到的陷阱“清单”，以及通常在发布一个产品或一系列产品时可以应用的步骤列表。最后展示了一些便捷的流程图，可以快速查找关键方法或最佳实践。

If you have a physical copy of this book, it should end up as a battered, dog-eared reference text lurking beside your keyboard. If you have a digital copy, it should be something that appears in your favorites list or your desktop. Compliance engineering is not something easily memorized and finished. It is a process --- an approach backed by tools and knowledge of best practices--- and we do best in this field when we continually refresh and hone our skills.

如果您拥有这本书的纸质书，那么它最终应该是潜伏在键盘旁边的破旧、折角的参考书。如果您拥有电子版，它应该在您的收藏夹中或桌面上。合规工程不是一件容易记住和快速完成的事情。它是一个过程，也是一种由工具和最佳实践知识支持的方法---当我们不断更新和磨练我们的技能时，相信我们在这个领域是做得最好的。

Thankfully, compliance engineering is no longer a "black box" mastered by only a few. Today, with texts like this or *Open Source Compliance in the Enterprise*1, every engineer can support the excellent use of third-party code. Licenses like the GPL, once regarded as challenging to fully adhere to, can become understandable and addressable by large and small entities alike.

值得庆幸的是，合规工程不再是只有少数人掌握的“黑匣子”。如今，有了这本书或《企业中的开源合规》1，每个工程师都可以出色地使用第三方代码。像GPL这样的许可证，曾经被认为很难完全遵守，现在无论大小团体都可以理解并快速解决。

Practical GPL Compliance and Open Source Compliance in the Enterprise work together to help engineers, startups, small companies, and enterprises master open source license compliance. However, they do not exist in isolation, and you can find more materials via the Linux Foundation Open Compliance Program at [**https://compliance.linuxfoundation.org**](https://compliance.linuxfoundation.org/). To get you started, Appendix 1 contains an overview of other publications available and a list of useful compliance templates.

企业中的实用GPL合规性和开源合规性，可以帮助工程师、初创公司、小公司和企业掌握开源代码许可合规性。除此之外，您还可以通过Linux基金会开放合规计划 (<https://compliance.linuxfoundation.org/>)找到更多资料。为帮助您快速入门，附录1包含了其他出版物的概述和一些有用的合规模板列表。

You may also be interested in Appendix 2: Compliance Standards, Appendix 3: Professional Networks, and Appendix 4: Tools and Infrastructure. There is a wealth of free resources available via The Linux Foundation and from other parties to ensure that knowledge of best practices and processes is readily available to you. Or..., just
go to the next page and get started right away with our cheat sheet.

附录2：合规标准，附录3：专业网络，附录4：工具和基础设施，可能您都会比较感兴趣。Linux基金会和其他各方提供了大量免费资源，以确保您可以随时获得最佳实践和流程的知识。或者...，只需转到下一页并立即开始使用我们的备忘单。

1. [**http://go.linuxfoundation.org/open-source-compliance-ebook**](http://go.linuxfoundation.org/open-source-compliance-ebook)

## The GPL Compliance Engineer Task-Based Cheat Sheet

## GPL合规工程师基于任务的备忘单

No time to read a book? Welcome to our world. We suggest copying this page, pinning it to your desk, and using it as a shortcut for getting things done.

没时间看书？那就欢迎来到我们的世界。我们建议复印此页面，将其固定在您的办公桌上，并将其用作完成工作的捷径。

[What you need to do 2](#context) 你需要做什么

[The tools you can use 6](#toolbox) 你可以使用的工具

[How to deal with binary code 8](#_bookmark4) 如何处理二进制代码

[Find problem binaries 10](#source-code-analysis-and-rebuild) 找出有问题的二进制代码

[Rebuilding a binary 14](#performing-a-rebuild) 重新编译

[Finding incorrectly licensed code 19](#finding-incorrectly-licensed-code) 找出不合规的代码

[Common pitfalls 22](#_bookmark8) 常见的陷阱

[Releasing software 37](#_bookmark17) 发布软件

[Buying software 42](#_bookmark22) 购买软件

[Building a FOSS code center 48](#_bookmark26) 构建一个FOSS代码中心

[Get checklists to help 52](#checklists) 获取帮助清单

[Get flowcharts to help 54](#step-4)  获取便捷的流程图

## Table of Contents

## 目录

##### [Chapter 1: Approach 1](#_bookmark0) 第一章：方法1

[Context 2](#context) 背景介绍

[Compliance Requirements 3](#_bookmark2) 合规要求

[Compliance Goals 3](#_bookmark2) 合规的目标

[Toolbox 6](#toolbox)  工具盒

[Analysis of Binary Files 8](#_bookmark4)  分析二进制文件

[Source Code Analysis and Rebuild 10](#source-code-analysis-and-rebuild) 源代码分析及重构

##### [Chapter 2: Common Pitfalls 22](#_bookmark8)  第二章：常见的陷阱

[Pitfall #1: Toolchain 23](#pitfall-1-toolchain)  陷阱#1：工具链

[Pitfall #2: Android 24](#_bookmark10)   陷阱#2：安卓系统

[Pitfall #3: "Out of tree" Linux Kernel Modules 27](#iproute2) 陷阱#3：“主干之外”的Linux内核模块

[Pitfall #4: Rescue Mode/Install Mode Systems 30](#pitfall-4-rescue-modeinstall-mode-systems) 陷阱#4：救援模式/安装模式系统

[Pitfall #5: Bootloader 31](#pitfall-5-bootloader)  陷阱#5：引导加载程序

[Pitfall #6: Missing Build System 31](#pitfall-5-bootloader)  陷阱#6：缺少构建系统

[Pitfall #7: Incorrect or Missing BusyBox Configuration Files 32](#_bookmark14) 陷阱#7：BusyBox配置文件不正确或已丢失

[Pitfall #8: Incorrect or Missing Linux Kernel Configuration Files 33](#_bookmark15) 陷阱#8：Linux内核配置文件不正确或已丢失

[Pitfall #9: Not Including the Version Number in Firmware and Source Code Archive Names 35](#_bookmark16) 陷阱#9：固件或源代码的存档名称中未包含版本号

##### [Chapter 3: Scenarios for Releasing Software 37](#_bookmark17)  第三章：发布软件的场景

[Scenario #1: Software On A Device/Offline Distribution 38](#scenario-1-software-on-a-deviceoffline-distribution) 场景#1：设备上安装的软件/离线分发

[Scenario #2: Providing A Manual Download From Website 39](#_bookmark19)  场景#2：提供网站下载的方式

[Scenario #3: Providing An Automatic Download Over The Air 40](#_bookmark20)   场景#3：提供自动无线下载的方式

[Scenario #4: Field Engineer Applied Updates 41](#_bookmark21)  场景#4：实用于现场工程师的下载方式

##### [Chapter 4: Scenarios for Buying Software 42](#_bookmark22) 第四章：购买软件的场景

[Context 43](#context-1)  背景介绍

[Scenario #1: SupplyChain Solutions For SoC Vendors 43](#context-1) 场景#1：SoC方案供应商的供应链解决方案

[Scenario #2: Supply Chain Solutions For ODMs 45](#_bookmark24)  场景#2：ODM的供应链解决方案

[Scenario #3: Supply Chain Solutions For Others 46](#_bookmark25)  场景#3：其他场景的供应链解决方案

##### [Chapter 5: Building a FOSS Code Center 48](#_bookmark26)  第五章：构建一个FOSS代码中心

[Context 49](#context-2)  背景介绍

["FOSS Code Center" As A Requirement 49](#context-2) “FOSS代码中心”作为一个要求

[Keep Firmware And Source Code Together 50](#_bookmark28) 将固件和源代码放在一起

##### [Chapter 6: Tracking Tasks and Processes 51](#_bookmark29) 第六章：跟踪任务和进程

[Checklists 52](#checklists)  清单列表

[Flowcharts 54](#step-4)   流程图

[Appendices 63](#appendices)  附录

[Appendix 1: The Open Compliance Program 64](#appendix-1-the-open-compliance-program)  附录1：开放合规计划

[Appendix 2: Compliance Standards 68](#template-for-an-approval-request-form-for-the-use-of-free-and-open-source-software) 附录2：合规标准

[Appendix 3: Professional Networks 69](#_bookmark37)  附录3：专业网络

[Appendix 4: Tools & Infrastraucture 70](#appendix-4-tools-and-infrastructure) 附录4：工具和基础设施

[]{#_bookmark0 .anchor}CHAPTER 1:

# Approach

## "In theory there is no difference between theory and practice. In practice there is."

YOGI BERRA

## Context

Compliance engineering consists of a good approach, a good toolbox, and a good process. First things first: What are our goals in compliance engineering?

This book focuses on GPL Compliance Engineering. The GPL is a copyright license with terms that trigger when we distribute the code. The most famous and widely used version of the license is the GPL Version 2 (GPLv2). Software such as the Linux kernel or many commonly-used versions of GNU userland tools fall under this license. There are other licenses, such as the Library or Lesser GPL (LGPL) or Affero GPL (AGPL), which are regarded as being in the same "family" but which have different terms. We address key aspects of the LGPL in Flowchart #52 later in this text, but we do not specifically address the terms of the AGPL in this book.

The focus in this book will be on GPL Version 2. This is formally referred to as the GPLv2. However, throughout this book we will refer to it as the GPL to keep things simple. This means that unless explicitly stated otherwise, we mean "GPL Version 2" when we say "GPL." You can review this license and all the other GPL family licenses on the Free Software Foundation website.3

GPL compliance engineers are concerned about software products that are electronically or physically distributed. Sometimes this means scanning source code to confirm it has the expected licensing. Sometimes this means scanning binary code or cross-checking binary code with source code to confirm that they match. In practice, most compliance work is focused on physical products sent to market or firmware downloads.

2. [See page 62](#_bookmark33)

3. See
    [**https://www.gnu.org/licenses/licenses.html**](https://www.gnu.org/licenses/licenses.html)

[]{#_bookmark2 .anchor}This book explains the process of confirming whether the binary code on a physical device contains GPL code and then taking action to ensure compliance if it does.

## Compliance Requirements

The GPLv2 (hereafter the GPL) has a couple of important requirements. One is ensuring that a copy of the license is provided along with the distributed binary or source code. The other is providing access to source code when distributing binary code either as a stand-alone software application or as part of a physical product.

The GPL describes two ways to comply with the source code access requirement:

1. Accompany a product with the "complete and corresponding source code" (section 3a)

2. Include a written offer to supply the "complete and corresponding source code" (section 3b)

These two methods differ in **how** the source code is delivered (either with the binary code or later if requested), but they do not differ in **what** needs to be delivered: complete and corresponding source code.

## Compliance Goals

Now that we understand the GPL compliance requirements, we can understand our overarching compliance goals:

1. Make sure a copy of the license accompanies the distributed binary or source code .

2. Make sure that the "complete and corresponding" source code is available.

#### Copy of the License

When you distribute GPL code as binary or source code, you need to ensure it is accompanied by a copy of the GPL license. This is the easiest and quickest part of any GPL compliance engineering process.

You can include a copy of the GPL license as physical or digital media along with a product. Some examples are:

- Smart televisions that come with a copy of the GPL physically printed at the back of the instruction manual along with other legal notices.

- Smartphones that come with a copy of the GPL under the Settings Legal menu or similar location.

The important objective is to ensure that the license is easily discoverable by an interested party.

#### "Complete and Corresponding" Source Code

This is a challenging part of GPL compliance and the situation that the majority of this book helps to explore, explain, and solve. As mentioned above, our focus is primarily on physical products distributed with GPL software contained inside, because this is the most common and most problematic use case for compliance engineers. Typical examples include firmware flashed onto a device or firmware updates downloadable from a website.

##### Two Key Considerations

There are two primary checks you need to focus on to ensure compliance:

1. The source code does not contain any license violations.

2. The source code is "complete and corresponding" for the binary code distributed.

##### The Ideal Situation

In an ideal world, there is a binary package or a collection of binary packages, such as a firmware and a corresponding source code archive. The corresponding source code archive contains only open source components and perhaps some object files to relink binaries that contain Library or Lessor GPL (LGPL) software, along with instructions for rebuilding the binary or firmware. After performing the rebuild, the original binary file is an exact match to the rebuilt binary file.

##### The Reality

Source code is often not "complete and corresponding." When you rebuild a binary, you may find different file sizes or even completely different versions or types of binary code compared to the expected original. This is the first major challenge we face when seeking to ensure GPL compliance.

Another challenge comes as a consequence of the above. The source code for a device often contains license violations that are unrelated to the binary code it is meant to support. For example, source code archives sometimes contain prebuilt binaries that have no relevance to being "complete and corresponding," and instead serve only to put a company out of compliance when it makes source code available in good faith.

This is where the bulk of GPL compliance engineering takes place. Compliance engineers live on the intersection between source code and binary code. Our challenge is to ensure that a physical product ships with the expected code, with a copy of the correct licenses, and with the "complete and corresponding" source code or a written offer to provide that "complete and corresponding" source code on demand.

## Toolbox

Now that our challenge is clear, it is time to talk about the type of tools we need to get things done. This discussion is not intended to be exhaustive, but rather to provide a starting point. If you have access to the tools we talk about below, you can do everything contained in this guide. In turn, that will allow you to address the vast majority of GPL compliance engineering challenges out there.

#### Default Tools

The primary tool for any open source compliance engineer is Linux. This means that every active engineer needs to download, install, and set up a standard Linux distribution such as Fedora, CentOS, openSUSE, Debian, or Ubuntu. They all come with default tools pre-installed that act as the backbone of our work. Examples include *file, readelf, find, xargs, grep, dd,* and *modinfo.*

Here are free installations you can get, and where you can get them:

- Fedora: [**https://getfedora.org/**](https://getfedora.org/)

- openSUSE: [**http://opensuse.org/**](http://opensuse.org/)

- Debian: [**https://www.debian.org/**](https://www.debian.org/)

- Ubuntu: [**https://www.ubuntu.com/**](https://www.ubuntu.com/)

- CentOS: [**https://www.centos.org/**](https://www.centos.org/)

Armijn Hemel's default installation for compliance engineering is Fedora. However, the choice of distribution matters less than the engineer being comfortable with that choice.

#### Binary Analysis

There are some specialized tools to help with analysis of binaries.

We mainly use the Binary Analysis Tool (BAT), but you have options, and can select the one you're most comfortable using.

##### The Binary Analysis Tool (BAT)

The Binary Analysis Tool makes it easy to look inside binary code, find compliance issues, and reduce uncertainty when deploying Free and Open Source Software. It is a modular framework that assists compliance and due diligence activities by using the same type of approach applied by copyright holders to discover issues in consumer electronics. BAT can open more than 30 types of compressed files, file systems, and media files; search for Linux kernel and BusyBox issues; identify dynamically linked libraries; and scan arbitrary ELF, Android Dalvik, and Java class files using a database with information extracted from source code to find out what software is inside. BAT is available for free under the Apache license so that everyone can use, study, share, and improve it.

- BAT direct download: **[https://github.com/](https://github.com/armijnhemel/binaryanalysis) [armijnhemel/binaryanalysis](https://github.com/armijnhemel/binaryanalysis)**

- BAT user guide: **[https://github.com/armijnhemel/](https://github.com/armijnhemel/binaryanalysis/blob/master/doc/bat-manual.pdf) [binaryanalysis/blob/master/doc/bat-manual.pdf](https://github.com/armijnhemel/binaryanalysis/blob/master/doc/bat-manual.pdf)**
##### binwalk

Another tool for analysing firmware is binwalk --- an easy to use tool for analyzing, reverse engineering, and extracting firmware images.

- binwalk download: [**https://github.com/devttys0/binwalk**](https://github.com/devttys0/binwalk)

- binwalk user guide: **[https://github.com/devttys0/](https://github.com/devttys0/binwalk/wiki) [binwalk/wiki](https://github.com/devttys0/binwalk/wiki)**

#### Source Code Analysis

Our focus is on how to address binary code and the distribution of physical devices. This does not mean that tools to address []{#_bookmark4 .anchor}source code are unavailable. Indeed, every good compliance engineer has at least one such tool on hand to assist with confirming that source code licenses are what they expect. The best place to get started is usually with FOSSology, a free license scanner that examines source code archives and lets you know what licenses they appear to be under.

##### FOSSology

FOSSology ([**https://www.fossology.org**](https://www.fossology.org/)) is both a compliance software system and a toolkit. As a toolkit, it allows you to run license, copyright, and export control scans from the command line. As a system, it provides a database and web UI to give you a compliance workflow. With one click, you can generate an SPDX file or a README with the copyright notices from your software. FOSSology deduplication means that you can scan an entire distro, submit a new version, and only the changed files will get rescanned. This can be a huge timesaving tool for large projects.

- Learn more about the project here:

[**https://www.fossology.org**](https://www.fossology.org/)

- Find a simple 'Get Started' guide to FOSSology here:

[**https://www.fossology.org/get-started**](https://www.fossology.org/get-started)

## Analysis of Binary Files

#### A Word about Binaries

In this book, the word "binary" can mean different things. Sometimes it means a single executable, sometimes it means an object file, sometimes it means an archive of binaries, sometimes a firmware; other times it means an unknown blob of data.

Here is what these different types of binary uses all have in common:

1. They are not source code.

2. They could be built from open source code.

3. They should be analysed.

#### Tools for Analyzing Binaries

##### General Approach

Analysis of a binary can be performed using a number of methods and tools. It is generally recommended to use the Binary Analysis Tool4 or *binwalk*5 where possible, to quickly and simply look inside binary code without reverse analysis. You can also manually dissect a binary file, blob, or package such as firmware, but this tends to take more time, and provides little advantage in exchange for the increased complexity.

##### Limitations

Not every binary can be unpacked for analysis. For example, firmware might have been obfuscated through file system modifications, or it may have been encrypted. Sometimes it is possible to identify the file system modifications or to reverse the encryption, but in other cases, it is impossible.

##### Advanced Methods

Advanced methods of getting around obfuscation include grabbing code from a "live" or running device through soldering connections or breaking into it over a network. These techniques are out of scope of this book. In the real world, most of the time, you will not face these challenges.

4. [**http://www.binaryanalysis.org**](http://www.binaryanalysis.org/)

5. [**https://github.com/devttys0/binwalk**](https://github.com/devttys0/binwalk)

## Source Code Analysis and Rebuild

A source code archive should be inspected to do the following tasks:

1. Find possibly problematic binaries in source code archives

2. Perform a rebuild of the source code and comparing it to the original binary

3. Find incorrectly licensed code

#### Finding Possibly Problematic Binaries

Source code archives from chipset manufacturers and ODMs (original design manufacturer) often contain more than just source code. Inside these archives you will often find:

- Object files leftover from a previous build

- "Out of tree" Linux kernel modules in binary form

- Libraries/executables such as a root file system from a previous build

- File system images

- Linux kernel images with initial embedded ramdisks/ initramfs file systems

- Other firmware images

Each of these files will be explored in more detail later.

You can easily find possibly problematic files using the *"find"* command in combination with the *"file"* and *"xargs"* commands. One easy way to do this is to run *"file"* for every file and redirect the output to a result file. You can then inspect this result file at your convenience. Here is an example command to get you started:

\$ find /path/to/source/code -type f -print0 \| xargs \--null file \
/path/to/result/file

You should search for:

- ##### ELF files

Pay attention to the architecture. If an unexpected architecture is shown, such as MIPS, but your deployed device is ARM, then the binary can probably be removed.

- ##### PE32 and PE32+ files

These are Windows binaries and usually have no place in a source code release related to an embedded Linux system. The exception is if they are related to ActiveX plugins.

- ##### Linux kernel boot images

If these are present either as a compressed file or as part of a U-Boot boot image, they can almost always be removed, because they were almost certainly compiled using a different configuration file. Including them would lead to potentially introducing licensing requirements unrelated to the target device. If such images cannot be removed because they are needed by the build process, it indicates that the source code is not complete. The shortcut is to search for "vmlinux," "vmlinuz," or similar files.

- ##### MacOS X files

Like Windows files, these have no place in a source code release of an embedded Linux system, except if they are related to software that would be served to Apple MacOS X machines by the device. The shortcut to search for is "Mach-O." These files are often present in the prebuilt toolchain sources from Android as distributed by Google.

##### Object Files

Object files (extension ".o") can frequently be found in source code releases. They are usually not problematic from a compliance perspective, because the corresponding source code is typically also present. However, they make analysis more complex, because they mean more files to look at. You can address this quickly and cleanly by checking if the corresponding extension ".c" or ".cc" files are present and, if so, using "make clean" to remove the object files.

If there is no source code, you may have a compliance challenge. There are situations where the object files are needed to complete the build process and should not be removed. One example is object files that are part of a proprietary program that is statically linked with LGPL licensed code and which need to be relinked. Another example is when object files are part of a proprietary program that is statically linked with GPL licensed code and where compliance may be difficult or impossible depending on your legal jurisdiction and your legal counsel's interpretation of the GPL license.

##### "Out of tree" Linux Kernel Modules

Some devices contain components unsupported by the default Linux kernel. These need extra drivers to function correctly, and such drivers are often implemented as Linux kernel modules. A few examples include WiFi drivers, camera drivers, or firewalling modules. These extensions provide two common challenges:

1. Many drivers are provided prebuilt by vendors to ease integration issues. The license of these drivers should be carefully checked to ensure they are compatible with the license of the Linux kernel source.

2. When extra driver source code is available, it may not be integrated correctly in the source code tree. Incorrect integration in the build system often leads to missing source code in the final delivery.

##### Libraries/Executables

There are often library or executable binaries in the source code tree. This occurs when:

1. The source code tree was not properly cleaned up after building. This often occurs because someone forgot to run "make clean" after building binaries from the source code.

2. The binaries are in a "template" or "skeleton" directory used as the blueprint to build a firmware. The directory structure and the binaries in the template directory are copied first, and other files are added to it during the build.

If these binaries contain any open source licensed code and do not match the source code prepared for distribution, they should be removed. A wrong version number, a different configuration, or any other alteration from the source code could introduce unintended violations.

The key question when considering this matter is: "Is the source code 'complete and corresponding' to the built binary code and free of any extra binary or source code elements?"

##### File System Images

Sometimes entire file system images are included in the source code tree. For example, many Android source code trees contain file system images called "boot.img" and "system.img." If these contain any open source software without corresponding source code, this could lead to unwanted violations. These images can typically be removed without any
problem.

##### Other Firmware Images

There have been instances where complete firmware for devices unrelated to the device being brought to market have been found in the source code archive. These often contain different software versions, packages, and sometimes even architectures to the current device. As such, these firmware are an unwanted and unnecessary source of license violations, and can typically be removed without any problem.

#### Performing a Rebuild

The most effective way to see if the source code is complete and corresponding is to rebuild the software and compare it to the original (binary) software. If they are identical --- or nearly identical

- then it is a good indication the source code is likely correct.

##### Perfect(ish) Rebuilds

In some cases, paths and time stamps are incorporated into a binary file. This makes it very difficult, if not impossible, to do an exact rebuild. Therefore, "close enough" means that the only differences should be in timestamps, filename paths recorded in the binary, and similar items.

##### Requirements

For a rebuild, it is important to have the following information:

1. A description of the build environment.

2. Full build instructions.

##### Goals

A rebuild has two key goals:

1. Verify that the build works.

2. Verify the results.

##### Describing the Build Environment

To successfully compare rebuilt binaries with original binaries, the build environment has to be described as accurately as possible. This description should include:

- The name and version of the Linux distribution or operating system that needs to be installed (example: Fedora 7, 32 bit, or Ubuntu LTS 12.04, 64 bit).

- The name and version of any packages to install if they are not installed in a default installation.

- Any modifications that need to be made to the default system, such as:

![](media/image6.png){width="7.305555555555555e-2in"
height="7.305446194225722e-2in"}![](media/image6.png){width="7.305555555555555e-2in"
height="7.305446194225722e-2in"}Symbolic links that need to be created. Directories that need to be created.

![](media/image6.png){width="7.305555555555555e-2in"
height="7.305446194225722e-2in"}![](media/image6.png){width="7.305555555555555e-2in"
height="7.305446194225722e-2in"}Permissions that need to be changed.6 Files that need to exist.

![](media/image6.png){width="7.305555555555555e-2in"
height="7.305446194225722e-2in"}![](media/image6.png){width="7.305555555555555e-2in"
height="7.305446194225722e-2in"}Specific users that need to be created. Environment variables that need to be set.7

If the build environment is different from the original, even to the extent of using a different compiler or different compiler options, it could have a big impact on the generated code. This in turn makes it a lot more difficult to compare the binary files to verify whether the source code appears to be "complete and corresponding" to the original binary.

##### Supplier/Client Roles

The requirement for accurate re-creation of build environments leads to a simple dynamic for providing information.

- If you are a supplier needing to provide build environment information to a client, you should be as detailed as possible.

- If you are a client needing to have build environment information, you should ask your supplier to be as detailed as possible.

6. These include items like executable bits, read/write permission, and ownership permissions.

7. These include PATH, CLASSPATH, and similar.

##### Rebuild Instructions

The build instructions should clearly explain the exact steps taken to rebuild a binary. This includes:

- The exact commands needed to rebuild the binary or firmware.

- The expected results such as, for example, where binaries can be found after a rebuild.

In an ideal situation, you could give the instructions to a random engineer, who would then be able to perform a nearly perfect rebuild without any problems.

##### Verifying the Instructions

In the real world, you might expect that people doing a rebuild for enforcement purposes will stop at the first hurdle they encounter. You should not assume that people can (or want to) fix these issues; therefore, the rebuild instructions should be complete, tested, and foolproof.

It is best to perform a rebuild on a clean physical or virtual machine, using the exact instructions that were provided. This is because undocumented modifications frequently exist on development machines such as the one on which the original build was completed. If possible, task another engineer --- one without extensive knowledge of the project --- to do the rebuild and to document any problems encountered. Adjust the instructions as necessary to ensure clarity and build success.

##### Verifying the Results

After the rebuild, you need to verify the results. Make sure that the right results are being examined --- nothing cached from a previous build. Two methods for accomplishing this are:

1. The checksum of the binaries.

2. The content of the binaries.

*The Checksum of the Binaries*

A cryptographic checksum or hash can be computed for the contents of the file. If the file that was rebuilt has the same hash as the original binary, then the files are identical. The tools for this are *"md5sum"* for MD5 hashes and *"sha256sum"* for SHA256 hashes. The following commands will compute the hashes for two binaries and print the results. If the results are the same except for the path, then the files are identical:

\$ md5sum /path/to/original/binary /path/to/new/ binary

\$ sha256sum /path/to/original/binary /path/to/ new/binary

It should be noted that it is best to run these commands on the individual binaries in a firmware (like *"smbd"* or *"iptables"*) and not on the whole freshly built firmware. This is because the checksums for firmware might never be the same. Some binaries like BusyBox or the Linux kernel will return a different checksum every time, because by default they include timestamps internally.

*The Content of the Binaries*

In many cases, the checksums of an original binary and a rebuilt binary will not be identical because the paths of source code files and timestamps are included. These often differ with each build, even if an environment is carefully set up.

Not to worry. The following steps can be taken to see if a rebuilt binary is close enough to the original binary:

1. Check the file size.

2. Compare the contents of the file.

*Checking the File Size*

The file size of the rebuilt binary should be very close to the original binary. If there is a big difference, first check if one of the binaries is "stripped" (no debugging symbols present) and the other is not stripped. If this is the case, strip the other binary too, using the "strip" command (this tool should be included in the toolchain). If the difference is still significant, then the binaries are likely not the same.

*Comparing the Contents of the File*

The "strings" command can be used to extract human readable strings from a binary. This can provide a lot of useful information.

The most important point is that the differences between binaries that were built identically will be very minor. For the most part, you can expect differences to be constrained to timestamps, filenames, and directory names.

This means that you can compare the contents of a file with a simple three-step process:

1. Rebuild the binary.

2. Extract contents using "strings."

3. Compare the results to the original binary.

The following commands will help you extract the contents of the files:

\$ strings /path/to/old/binary \

/tmp/strings.old

\$ strings /path/to/new/binary \

/tmp/strings.new

\$ diff -u /tmp/strings.old

/tmp/strings.new \| less

If the differences uncovered are limited to timestamps and path names, then it is almost certain that the two binaries are in fact identical.

#### Finding Incorrectly Licensed Code

Modifications to open source licensed programs may not be licensed correctly. One classic example is when changes to the Linux kernel made by a chipset manufacturer either lack license statements or contain a statement that is not compatible with the GPL.

There have been enforcement cases focused on relicensing Linux kernel driver code added by chipset manufacturers. The following steps should be taken to avoid such situations:

1. Find incorrectly licensed files.

2. Find out who introduced the incorrectly licensed files.

3. Find out if the files are actually needed.

4. Find a version under an acceptable license.

5. Seek permission to change the licenses.

6. Rewrite the software.

##### Finding Incorrectly Licensed Files

Using license scanners, it is possible to find out the license of source code files. There are many license scanners. Some of them are proprietary (e.g., Black Duck Protex, Palamida, Whitesource, Protecode, FOSSID, and FOSSA); others are open source (FOSSology, Scancode). None of the license scanners do a perfect job, because license scanning is difficult to do correctly, and there are many source code files that use non-standard license headers, or have no license text in a header at all.

For code you wrote yourself, there are ways to make license identification easier for license scanners. One example is to use SPDX short identifiers. SPDX is a simple, standard way of describing package contents and has seen adoption across the industry for its management of licensing descriptions. You can learn more about SPDX at
**<https://spdx.org/>**.

##### Finding Who Introduced Incorrectly Licensed Files

After discovering incorrectly licensed files, it is important to understand who introduced them. It usually boils down to one of two sources:

1. The upstream project.

2. The ODM/chipset manufacturer.

If you identify a situation where open source code does not have a correct license statement, many upstream projects will appreciate having this pointed out. Fixing the issues at the source provides better information for everyone. Please note that in the case of the Linux kernel, there are many files that do not have a correct license statement. However, existing files have been in the Linux kernel for many years and are not considered a problem. Your concern is to find new rather than known files. A method to quickly filter the known files is described here: **<https://lwn.net/Articles/552758>**

Sometimes people or companies have a list of "trusted" upstream projects. They regard all code originating from that project to be ready for use without further review. What projects will be trusted and for what reasons is a decision that will differ per person or organization. An illustrative rule of thumb is that the Linux kernel obtained directly from kernel.org may be trusted but a random kernel fork on GitHub may not.

##### Finding Out If Files Are Actually Needed

If the problematic files were not introduced by the upstream project (whether the upstream project is to be trusted is a separate topic for discussion) then it might be wise to remove the files. As an example, if a file for a Microsoft Windows driver is present in the Linux kernel source code tree, it can be safely removed.

Similarly, if a file is not used in the final binary or during the build process, it can be safely removed. One way to check is by removing it from the source code tree and rebuilding the binary again (after cleaning up build artifacts from previous builds, of course, and doing a fully clean build). If the resulting binary is identical (or "close enough"), then the file can safely be removed.

**Finding a Version of a Driver Under an Acceptable License** In the embedded Linux industry, many mistakes have been made in the past regarding incorrectly licensed source code files, particularly for drivers. Some vendors have already relicensed newer versions of the driver under acceptable licenses. However, ODMs frequently still ship old driver versions, either because they are unaware of the updates or because they don't want to test if the new driver works properly with their components.

##### Seeking Permission to Change the Licenses

Changing a license is usually the most difficult solution, but sometimes the only option left, apart from rewriting the software. If a file is used and does not have the correct license, you should ask the copyright owner to relicense the file. Some copyright owners might not be willing to, but other manufacturers or developers might not object (see the previous section).

CHAPTER 2:

第二章：

# Common Pitfalls
# 常见的陷阱

## "We demand rigidly defined areas of doubt and uncertainty!"
## “我们需要严格界定怀疑和不确定性的领域！”

DOUGLAS ADAMS

道格拉斯亚当斯

## Pitfall #1: Toolchain
## 陷阱#1：工具链

One component that is essential for doing a rebuild is the toolchain, which consists of the compiler, assembler/linker/et cetera, and a C library. For embedded Linux systems, the compiler is almost always GCC (although LLVM is starting to be used), the assembler/ linker comes from GNU binutils, and the C library is glibc or uClibc (both LGPL licensed) or musl (MIT licensed) on "regular" embedded Linux, and bionic on Android systems (although glibc is frequently used on Android too for add on programs). Although LLVM and musl are being used increasingly in embedded systems, they are still the exception.

进行重建必不可少的一个组件是工具链，它由编译器、汇编器/链接器等以及一个C库组成。对于嵌入式Linux系统，编译器几乎都是采用GCC（尽管现在开始使用了LLVM），汇编器/链接器来自GNU binutils，在“常规”嵌入式Linux上，C库一般采用glibc或uClibc（这两者都获得了LGPL许可）或是musl（MIT 许可），在Android系统上一般采用bionic（虽然在Android系统上，glibc也经常用于附加程序）。尽管LLVM和musl在嵌入式系统中的使用越来越多，但它们仍然是例外。

The toolchain is often found to be not compliant. A common scenario is that a toolchain with GCC and GNU binutils is provided in binary-only form, without the source code or the offer for the source code. Although it is possible to use the provided binary toolchain to rebuild the binaries, it is not the correct approach. The GCC compiler and GNU binutils are released under GPL v2 or v3, depending on the version. Their source code, or a written offer for the source code, should be included with the binary. When glibc or uClibc is used, there is an additional reason: Parts of the (prebuilt) toolchain (from the C library) are sometimes copied from the toolchain into a firmware image. This means that the sources and configuration to rebuild the C library need to be provided too (as per the LGPL license conditions). The quickest way to fulfill the requirements is by having the complete toolchain sources.

工具链经常被检测发现不合规。通常的情况是，带有GCC和GNU binutils的工具链仅以二进制形式提供，没有源代码或源代码的书面要约。虽然可以使用提供的二进制工具链来重建二进制文件，但这不是正确的使用方法。GCC编译器和GNU binutils通常是基于GPL v2或GPL v3发布的，具体取决于版本信息。他们的源代码或源代码的提供者信息文件应包含在二进制文件中。当使用glibc或 uClibc时，还有一个额外的要求：有时需要将部分的（预编译）工具链（大部分来自C库）从工具链复制到固件镜像中。这意味着（根据LGPL的许可条件）还需要提供重构C库的源代码和配置信息。满足需求的最快方法是拥有完整的工具链资源。

Another consideration is that for embedded Linux, the toolchain is a necessary component in rebuilding the binary. Embedded Linux devices use different CPUs than regular PCs. While regular PCs use Intel or AMD chips based on the x86 or x86-64 architectures, the embedded devices are often built using ARM, MIPS, or PowerPC chips (although other architectures can be found too). The binaries for these platforms are generated by a so-called "cross-compiler" that runs on a regular PC but outputs code for a different platform such as MIPS or ARM. Building a working cross-compiler is a non-trivial task; without the sources and the exact description how to rebuild the cross-compiler (either using a script or the manual instructions), it will be very difficult to recreate the correct setup to perform a rebuild.

另一个考虑因素是，对于嵌入式Linux系统，工具链是重构二进制文件的必要组件。嵌入式Linux设备的CPU与普通PC不同。普通PC使用的是基于x86或x86-64架构的Intel或AMD芯片，而嵌入式设备通常使用ARM、MIPS或PowerPC芯片（也可以发现有其他芯片架构）构建而成。这些平台的二进制文件由号称的“交叉编译器”生成，该编译器在普通的PC上运行，但输出用于不同平台（如MIPS或ARM）的代码。构建一个可运行的交叉编译器是一项非常重要的任务；如果没有源代码和如何重构交叉编译器的确切描述（包括使用的脚本或是手动安装说明），将很难配置正确，重构成功。

## Pitfall #2: Android and Embedded Devices
## 陷阱#2： Android和嵌入式设备

Systems that are either running Android or that borrow heavily from Android, may have a few common pitfalls.

运行Android系统或与Android类似的系统可能会遇到一些常见的缺陷。

#### Android prebuilt tools
#### Android预构建工具包

The standard Android software development kit as shipped by Google comes with a large number of tools that are prebuilt for various platforms, such as Linux, Darwin, and Microsoft Windows, and even Linux kernel images for QEMU. Many of these tools are licensed under GPL or LGPL, such as GCC and binutils, cmake, gdb, and many others. These files can easily be identified by looking for directories that contain "prebuilt":

谷歌发布的标准Android软件开发工具包，附带了大量为各种平台预编译的工具，例如Linux、Darwin和Microsoft Windows，甚至还有用于QEMU的Linux内核镜像。这些工具中有许多是GPL或LGPL许可的，例如GCC和binutils、cmake、gdb等。通过查找包含“prebuilt”的目录，可以轻松找到这些文件：

\$ find -d /path/to/android/sdk \| grep prebuilt

These directories often contain a variety of prebuilt tools or even Linux kernel images that may be without obviously placed corresponding source code or written offer. Frequently there is a file called "PREBUILT" in the directory that also contains the binaries. This file points to source code and sometimes also contains more detailed build instructions. As an example (from an earlier version of Android, for the ccache tool):

这些目录通常包含各种预编译的工具，甚至是Linux内核镜像，在它们里面可能没有放置相应的源代码或源代码的书面要约。在目录中通常有一个名为“PREBUILT”的文件也包含二进制文件。该文件指向源代码，有时还包含更详细的构建说明。作为示例（来自早期的Android版本，用于ccache工具）：

The objects in this prebuilt directory can be rebuilt using the source archive ccache-2.4-android-20070905.tar.gz hosted at [\<http://android.kernel.org/pub/\>.](http://android.kernel.org/pub/)

可以使用托管在[\<http://android.kernel.org/pub/\>](http://android.kernel.org/pub/)的源文件归档文件ccache-2.4-android-20070905.tar.gz 重构此预编译目录中的文件内容。

It should be noted that these particular instructions may not be good enough to result in GPL compliance for chipset manufacturers, ODMs, and their downstream recipients, for a number of reasons:

需要注意的是，这些特定的指令可能不足以使芯片组制造商、ODM及其下游接收者遵守GPL协议，原因有很多：

1.  This method does not produce a valid written offer, according to GPLv2 section 3b. While they arguably cover the originator of the code by the "equivalent access" clause in GPLv2 section 3 (because they distribute the source code only online), the instructions do not extend to the chipset manufacturers, the ODMs, and their downstream recipients.

   根据GPLv2协议第3b节，此方法不会产生有效的书面要约。虽然他们可以通过GPLv2第3节中的“等效访问”条款来涵盖代码的发起者（因为他们仅在线分发源代码），但这些说明并未扩展到芯片组制造商、ODM及其下游接收者。

2.  As of the publication date of this book, it should be noted that one commonly referred to location for Android source, called android.kernel.org, has been offline since September 2011. This means that the relevant source code can no longer be found at this particular location, though it may be found at other URLs.

    自2011年9月以来，一个被称为Android源代码的网址：android.kernel.org，一直处于离线状态，需要注意的是截至本书出版之日时仍然如此。这意味着在这个网址已经无法找到相关的源代码，虽然它依然可能在其他网址中找到。

Having these prebuilt components in the source code archive without the corresponding source code can present a compliance risk.

在没有相应源代码的归档文件中找到的这些预构建组件，可能会给项目带来合规性风险。

One solution is to also include the source code for these prebuilt components. Another solution is to remove the components if they are not needed to do a rebuild (e.g., in most cases, it makes sense to remove the binaries for MS Windows and Darwin), or to replace the prebuilt components, if they are actually needed for the build, with instructions on how to fetch the prebuilt components from Android's Git server. You should make sure that the exact same version as the prebuilt versions is fetched; otherwise the build might fail or it might be difficult to compare binaries (see "Performing a Rebuild"). It should be noted that for some components, such as the toolchain, it might still be necessary to provide sources, in case glibc or uClibc has been used and shipped on the device or in the firmware.

一种解决方案是找到这些预构建组件的源代码，并将它们包含进去。另一种解决方案是，如果重建时不需要的组件，可以删除掉（例如，在大多数情况下，删除MS Windows和Darwin的二进制文件是可行的）；如果重新构建确实需要这些组件，可以替换预构建的组件，并提供如何从Android的Git服务器获取预构建组件的说明。需要确保服务器上获取的版本与预构建版本完全相同；否则构建可能会失败或者比较二进制文件可能会有问题（请参阅“执行重建”）。应该注意的是，对于某些组件（例如工具链），可能仍然需要提供源代码，以防止设备或固件中使用了glibc或uClibc。

#### Missing/Incorrect License Files
#### 缺少的/不正确的许可文件

Android's build system generates a NOTICES.html.gz file that is displayed by default in the "legal" tab on a phone or tablet. This file is generated by a script that looks for files that indicate the license status, called "NOTICE."

Android的构建系统会生成一个NOTICES.html.gz文件，在手机或平板电脑上，默认情况下该文件包含在“合法”选项卡中。该文件是由一个脚本生成，该脚本会查找指示许可证状态的相关文件，称为“NOTICE”。

For some tools and programs in Android, you may find missing license identifiers or have used the wrong license text (in case of the Linux kernel). These omissions were fixed in the most recent versions of Android (Android 6, possibly later versions of 5), but many older versions (including several versions of Android 5) do not have these fixes. Chipset manufacturers and ODMs typically have not applied the existing fixes because they were not informed by Google. The omission of these texts has been raised in enforcement cases.

对于Android中的一些工具和程序，您可能会发现缺少许可证标识符或使用了错误的许可文件（以Linux内核为例）。在最新版本的Android（Android6，可能是5之后的更高版本）中，这些遗漏已经得到修复，但许多旧版本（包括Android 5的多个版本）都还没有修复。芯片组制造商和ODM通常没有使用现有的修复程序，因为Google没有通知他们。在执行案件中，这些文本的遗漏已经被提出了。

The most common omissions and errors are with:

最常见的遗漏和错误是：

-   iproute2 --- missing license reference in the NOTICES file
-   iproute2 --- 在NOTICES文件中缺少许可证的引用

-   iptables --- missing license reference in the NOTICES file
-   iptables --- 在NOTICES文件中缺少许可证的引用

-   Linux kernel --- sometimes wrong version of the license in the NOTICES file (Linux kernel 2.6-specific)
-   Linux内核 --- 在NOTICES文件中有时会出现许可证版本错误（尤其是Linux内核2.6）

Fixing these issues is not hard at all, and patches are readily available, as described below.

修复这些问题一点都不难，修补程序也很容易获得，如下所述。

###### *iptables*

The notices and license files for iptables are missing in older versions of Android. Google fixed the bug in the following Git commit:

旧版本的Android系统中缺少iptables的通知和许可文件。Google修复了以下Git提交中的错误：

**[https://android.googlesource.com/platform/external/](https://android.googlesource.com/platform/external/iptables/%2B/b6da12d1a9020e2819f3c449244801a285659f)
[iptables/+/b6da12d1a9020e2819f3c449244801a285659f81](https://android.googlesource.com/platform/external/iptables/%2B/b6da12d1a9020e2819f3c449244801a285659f)**

###### *iproute2*

The notices and license files for iproute2 are missing in older versions of Android. Google fixed the bug in the following Git commit:

旧版本的Android系统中缺少iproute2的通知和许可文件。Google修复了以下Git提交中的错误：

**[https://android.googlesource.com/platform/external/](https://android.googlesource.com/platform/external/iproute2/%2B/5aa4845c8ef3ea0371955a2ba5f7baf7ed4e2d)
[iproute2/+/5aa4845c8ef3ea0371955a2ba5f7baf7ed4e2df4](https://android.googlesource.com/platform/external/iproute2/%2B/5aa4845c8ef3ea0371955a2ba5f7baf7ed4e2d)**

###### *Linux kernel*

The Linux kernel license file is sometimes wrong, because Google used the license text of a prebuilt Linux kernel (2.6.x), which has a slightly different license text than later versions. This was not a problem for Android versions using the 2.6.x kernel, but when the Linux kernel moved to 3.x and later 4.x, the license text was not
entirely correct. Google fixed this in late 2015:

Linux内核许可文件有时是错误的，因为Google使用了预构建Linux内核(2.6.x)的许可文本，其许可文本与更高版本的许可文件略有不同。这对于使用2.6.x内核的Android版本来说不是问题，但是当Linux内核迁移到3.x和更高的4.x版本时，许可文本并不完全正确。谷歌在2015年底修复了这个问题：

**[https://android.googlesource.com/platform/build/+/](https://android.googlesource.com/platform/build/%2B/b463fcde80f5615b3fe6891b8b78c010ec8cd37b)
[b463fcde80f5615b3fe6891b8b78c010ec8cd37b](https://android.googlesource.com/platform/build/%2B/b463fcde80f5615b3fe6891b8b78c010ec8cd37b)**

## Pitfall #3: "Out of tree" Linux Kernel Modules
## 陷阱#3：“外部的”Linux内核模块

Many vendors ship Linux kernel modules that add functionality that is not provided by the standard Linux kernel, or that is not yet present in the version shipped for the device, such as support for certain hardware, firewalling modules, new security features, etc. Linux kernel modules for the 2.6 and later releases have the ".ko"
extension. Kernel modules for the 2.4 and older kernel often have the extension ".o" (but that could also be used for regular object files).

许多供应商发布的Linux内核模块添加了标准的Linux内核未提供的功能，或者设备所提供的版本中尚不存在的功能，例如对某些硬件的支持、防火墙模块、新的安全功能等。Linux2.6及更高版本的内核模块通常具有“.ko”扩展名。2.4和更早版本的内核模块通常具有“.o”扩展名（但也可用于常规目标文件）。

For these so-called "out of tree" kernel modules, it is important to find out which license they are under and if there is complete and corresponding source code.

对于这些所谓的“外部的”内核模块，重要的是要弄清楚它们使用的哪个许可证，以及是否有完整的对应源代码。

Linux kernel modules can contain several fields that detail things such as the author and a description, but also a license field. An example from Linux kernel 4.5. (file "drivers/clk/clk-pwm.c") looks like this:

Linux内核模块可以包含多个详细的信息字段，比如作者和文件描述等，还有一个许可证字段。以Linux内核4.5为例，其（文件“drivers/clk/clk-pwm.c”）格式如下：

MODULE_AUTHOR("Philipp Zabel

[\<p.zabel@pengutronix.de\");](mailto:p.zabel@pengutronix.de)

MODULE_DESCRIPTION("PWM clock driver"); 

MODULE_LICENSE("GPL");

These fields are then included in the kernel module binary when it is built. They can later be extracted from the binary either by using the "modinfo" tool (preferred) or manually (as recent versions of "modinfo" no longer support the format for Linux kernel 2.4 or older). The important fields to look at are the author field and the
license field. The author field usually indicates the copyright holders of the specific code being reviewed. The license field could indicate the possible license of a file. This field is quite important, as certain pieces of functionality in the Linux kernel can only be used by modules that have explicitly declared that they are
GPL-licensed.

在构建内核模块二进制文件时，这些信息将包含在其中。之后可以使用“modinfo”工具（首选）或手动从二进制文件中提取它们（因为“modinfo”的最新版本不再支持Linux内核2.4或更高级的版本）。主要查看作者字段和许可证字段。作者字段通常表示审查当前代码的版权所有者。许可证字段可以指示文件的可能许可证。这个字段非常重要，因为Linux内核中的某些功能只能由明确声明为GPL许可的模块使用。

It also happens that kernel modules are distributed in a firmware or source code archive, but they are not used, because they are never loaded by the operating system, either because there are no programs to load them, or because the operating system does not allow it (it may be a different version or even a completely different
architecture). Finding out if a module is used is outside of the scope of this book.

还有一种情况是，内核模块分布在固件或源代码归档文件中，但未被使用过，因为操作系统从未加载过它们，要么是因为没有程序需要加载它们，要么是因为操作系统不允许（它可能是不同的版本，甚至是完全不同的体系结构）。确定一个模块是否被使用已经超出了本书的范围。

#### Extracting License and Author Fields from a Kernel Module
#### 从内核模块中提取许可证及作者信息

The license field can be extracted from a Linux kernel module using the modinfo tool:

使用以下的modinfo工具，可以从Linux内核模块中提取许可证字段：

\$ modinfo -l /path/to/kernel/module

Similarly, the author field can be extracted using:

类似地，可以通过以下方式提取作者字段：

\$ modinfo -a /path/to/kernel/module

Note: Recent versions of the modinfo program no longer have support for kernel modules for Linux kernel 2.4.X and earlier (using the ".o" extension). For those modules, you can use the "strings" command instead:

注意：最新版本的modinfo程序不再支持Linux内核2.4.X及更早版本的内核模块（使用“.o”扩展名）。对于这些模块，可以改用“strings”命令：

\$ strings /path/to/kernel/module \| grep -i license

#### Extracting Version and Architecture Fields from a Kernel Module
#### 从内核模块中提取版本及体系结构信息

Similarly to the license field, the version and architecture information can easily be retrieved from a Linux kernel module:

与许可证字段类似，可以从Linux内核模块轻松地提取版本和体系结构信息：

\$ modinfo /path/to/kernel/module \| grep \^vermagic

For 2.4.X and earlier, the version can be extracted as follows (because the modinfo tool on recent Linux distributions no longer can process modules for 2.4 or earlier):

对于2.4.X及更早的版本，可以按如下的方式提取版本信息（因为最近Linux发行版上的modinfo工具不再能够处理2.4或更早版本的模块）：

\$ strings /path/to/kernel/module \| grep kernel\_ version

The architecture can be retrieved using different means, such as the "file" command:

体系结构信息可以用不同的方法提取出来，比如“file”命令：

\$ file /path/to/kernel/module

## Pitfall #4: Rescue Mode/Install Mode Systems
## 陷阱#4：修复模式/安装系统模式

Quite a few embedded Linux devices have a special mode that is used only for system recovery (rescue mode) or when installing a new firmware. This is done by booting a different Linux kernel from a different partition on the flash memory. These rescue partitions are often not updated when a new firmware is released and are simply
forgotten. However, for compliance, it is very important to have the complete and corresponding source code for all of the different Linux systems that are used on a device or while updating a firmware.

很多的嵌入式Linux设备有一种特殊模式，仅用于系统恢复（修复模式）或安装新固件时使用。这是通过从闪存上的不同分区启动不同的Linux内核来完成的。当发布新固件时，这些救援分区通常被遗忘了，不会被更新。然而为了合规性，在设备上安装不同的Linux系统，或更新固件的系统时，为这些系统提供完整且相应的源代码是非常重要的。

These rescue partitions tend to have different contents than other partitions. It is very common to see that both the rescue partition and the normal one have a copy of BusyBox, but with a different size and set of tools integrated. This means that they were built with different configurations. It is also not uncommon to see that a
different Linux kernel (older version, known to work) has been used, but that the source code releases have the source code only for the Linux kernel that is booted in normal operation. There have also been instances where the C library was different (uClibc in the rescue partition, glibc in the normal partition, and so on).

这些救援分区的内容与其他分区往往不同。通常救援分区和普通分区都有一个BusyBox的副本，但具有不同的文件大小，并集成了不同的工具集。这意味着它们是用不同的配置构建的。通常它们也使用了不同的Linux内核（旧版本，已知有效），但只有正常启动下的Linux内核版本才包含源代码文件。也有一些C库不同的例子（如恢复分区中的uClibc，普通分区中的glibc等）。

It also happens that a separate version of Linux is booted only to perform the installation of a new firmware, and that version is embedded in the firmware update itself and is not on the device. Or, it could be that there are three different instances of Linux involved in one single firmware update: a temporary Linux booted when performing the update, a different version when writing a rescue partition, as well as a third version for the regular partition. It is important to look at everything that is installed or used at installation time: The device and the firmware update are both important.

另一种情况是，启动一个独立的Linux版本仅用于新固件的安装，而该版本嵌入在固件更新本身，不在设备上。还有一种情况，一次固件更新可能涉及三个不同的Linux实例：执行更新时启动一个临时的Linux，写入救援分区时使用一个不同的实例，以及常规分区使用的第三个实例。重要的是在安装时，要查看安装或使用的所有内容，包括设备和固件更新，它们都很重要。

## Pitfall #5: Bootloader
## 陷阱#5：引导分区

One overlooked component in compliance engineering is the bootloader. A few commonly used bootloaders on embedded Linux systems (e.g., U-Boot and Redboot) are GPL-licensed. The reason they are overlooked is because they come preflashed on the boards or chips, and ODMs frequently do not touch this component at all. Many times the
bootloader is also not included in a firmware update, but the firmware update overwrites only parts of the flash chip in a device and leaves the bootloader alone. However, if the bootloader is GPL- licensed, source code for the bootloader should be delivered as well.

合规工程中一个容易被忽视的组件是引导分区。嵌入式Linux系统上常用的引导分区（例如U-Boot和Redboot）是GPL许可的。被忽视的原因是因为它们被预先加载到了电路板或芯片上，而ODM通常无需接触这个组件。很多时候引导分区不包含在固件更新中，并且固件更新也只会覆盖设备中闪存芯片的一部分，不会影响到引导分区。但是如果引导分区是GPL许可的，则需要提供引导分区的源代码。

If possible, perform your analysis on the firmware update as shipped to customers (see "Pitfall #4") as well as on a dump of the flash contents of the actual device, unless the firmware update is actually the same as the flash dump.

如果可能，请对交付给客户的固件更新（请参阅“陷阱#4”）以及设备上的闪存的导出内容进行分析，确认固件更新与闪存的导出内容相同。

If the bootloader is not included, it might be necessary to extract the contents of the bootloader from the device. This is outside of the scope of this book.

如果不包含引导分区，则可能需要从设备中提取引导分区的内容。这超出了本书的范围。

## Pitfall #6: Missing Build System
## 缺陷#6：缺少构建系统

There are build systems that separate the sources of packages and the description of how to build them. Some build systems have a directory called "download" or "dl" that contains the sources, while the Makefiles, configurations, and patches are in a separate directory. Some companies will publish the contents of the directory only with the sources but not the build system.

有一些构建系统将源文件包和对源文件的构建描述分开。而有一些构建系统设置一个名为“download”或“dl”的目录，其中包含源代码，而将Makefile、配置和补丁文件位于单独的目录中。一些公司只发布目录的内容，而不发布构建系统。

This is wrong for a few reasons:

这是错误的，原因如下：

1.  Any patches that might have been applied are now not included, meaning that the source code is incomplete.

    现在的系统不包括后期可能应用的任何补丁，这意味着源代码不完整。

2.  Makefiles and other build scripts often contain configuration options (environment variables, compiler options, etc.) that influence how a package is built. Without this information, the binary cannot be rebuilt successfully, or at least not (near-)identically.

    Makefile文件和其他构建脚本通常包含各种配置选项（如环境变量、编译器选项等），这些配置信息说明了如何构建二进制包。如果没有这些信息，无法成功重构二进制文件，即使重构成功可能也不完全相同。    

## Pitfall #7: Incorrect or Missing BusyBox Configuration Files
## 缺陷#7：错误的或缺失的BusyBox配置文件

An often-encountered problem is that BusyBox cannot be rebuilt in such a way that it corresponds to the binary or binaries in a firmware. The BusyBox program is very modular; functionality can be added or removed by editing a configuration file (usually using a special configuration program). This configuration file is read during build time and determines which functionalities (called "applets") will be included in the BusyBox binary. The configuration file is therefore a very necessary part of the "complete and corresponding source code," and a missing or incorrect configuration file for BusyBox has been enforced many times.

经常遇到一个的问题是，不能以固件中对应的一个或多个二进制文件来重建BusyBox。BusyBox程序是非常模块化的；可以通过编辑配置文件（通常是使用特殊的配置程序）来添加或删除它的某项功能。在构建过程中读取配置文件信息，以确定哪些功能（也称为“小程序”）将包含在BusyBox二进制文件中。因此，配置文件是实现“完整且对应的源代码”的合规要求非常必要的一个部分，BusyBox的配置文件缺失或不正确的情况已经出现过多次。

#### Missing BusyBox configuration file
#### 缺失的BusyBox配置文件

Source code release archives often contain only the source code for BusyBox, but not the configuration, because the build system is not included (see Pitfall #6).

由于源代码发行版归档文件通常不包括构建系统（参见陷阱 #6），因此它只包含了BusyBox的源代码，而不包含配置文件，。

An easy check for this is to look for a file called ".config" in the top-level source code file of the BusyBox source code tree. If it cannot be found, it might be in a separate directory in the build system, if present.

可以简单地校验下，即在BusyBox源代码树的顶级源代码文件中，是否能查到名为“.config”的文件。如果找不到，它可能就被包含在构建系统的单独目录中（如果存在单独目录）。

#### Incorrect BusyBox configuration file
#### 错误的BusyBox配置文件

Another problem encountered at times is that the BusyBox configuration file or files are incorrect: The original binary and the rebuilt binary have different sets of applets. In many of these cases, the chipset manufacturer or ODM cannot find or recreate the correct configuration file.

有时遇到的另一个问题是BusyBox的配置文件不正确：原始的二进制文件和重建的二进制文件对应不同的小程序集。在许多情况下，芯片组制造商或ODM无法找到或重新构建正确的配置文件。

It is possible (with tools contained in the Binary Analysis Tool) to re-create a BusyBox configuration file that could be used as the basis of re-creating the real configuration file. However, this solution should be used only as a last resort.

可以（使用二进制分析工具中包含的工具）重新创建一个BusyBox配置文件，可以用该配置文件作为重新创建的基础。但是此解决方案只能作为最后的手段使用。

#### Multiple different BusyBox binaries, one configuration file
#### 多个不同的BusyBox二进制文件，但只有一个配置文件

Quite often there are multiple BusyBox binaries included in a firmware, each with a different configuration. A common example is a rescue system (see Pitfall #4) that contains a minimal version of BusyBox, with the full system containing a BusyBox instance with much more functionality. The source code archive should include the
configurations for all Busybox instances that are in use on the device, but frequently, the configuration for only one of the instances of BusyBox is present.

一个固件中通常包含多个BusyBox二进制文件，每个二进制文件都有不同的配置。一个常见的例子是恢复系统（参见陷阱#4），它包含BusyBox的最小版本，而完整系统则包含一个具有多个功能的BusyBox实例。源代码归档文件应该覆盖设备上所包含的多个Busybox实例的配置信息，但通常只含有一个BusyBox实例的配置文件。

## Pitfall #8: Incorrect or Missing Linux Kernel Configuration Files
## 陷阱#8：错误的或缺失的Linux内核配置文件

Very similarly to Pitfall #7, the configuration file for the Linux kernel is often missing or incorrect.

类似于陷阱#7，Linux内核的配置文件经常丢失或是不正确。

#### Finding which Linux kernel configuration was used
#### 查找使用了哪个Linux内核配置

Finding out what configuration was used to build a Linux kernel binary is not always trivial, and sometimes a rebuild and comparison (as described earlier in this book) will be necessary. Sometimes the kernel configuration will be included in the Linux kernel binary as a bzip2 compressed file. This happens if the "CONFIG\_ IKCONFIG" option was enabled during the kernel build. In that case, it is easy to find the kernel configuration that was actually used (for example, by unpacking the binary with the Binary Analysis Tool and then looking for the configuration). If the configuration was not stored in the Linux kernel image, then your only option to verify whether a kernel configuration is 100% correct is a rebuild and compare.

找出用于构建Linux内核二进制文件的配置不那么简单，有时候需要进行重构，并进行对比（如本书前面所述）。有时候内核配置文件会被压缩为bzip2格式，包含在Linux内核二进制文件中。如果在构建内核的过程中启用了“CONFIG\_ IKCONFIG”选项，就会发生这种情况。在这种情况下很容易找到实际使用的内核配置文件（例如，通过二进制分析工具解压缩二进制文件，然后查找）。如果配置文件没有包含在Linux内核镜像中，那么验证内核配置是否100%正确的唯一方法就是重构并比对。

#### Missing Linux kernel configuration file
#### 缺失的Linux内核配置文件

Source code release archives often contain only the source code for the Linux kernel, but not the configuration. Depending on the setup, the Linux kernel configuration could be in various locations. One common location is a file ".config" in the root of the Linux kernel source tree (generated by the Linux kernel configuration commands like "make config" or "make menuconfig"). Another location is in the "arch" subdirectory. By default, the Linux kernel source code tree contains
many configuration files, and vendors tend to put the configurations there. For example, "arch/arm/ configs/bcm2835_defconfig" contains the configuration for a particular Broadcom board. Which configuration file to use is set by the build scripts. A third option is that the configuration file is kept outside of the Linux kernel archive, with the build scripts, and is first copied to the Linux kernel source code tree during the build. If the build system is missing (see Pitfall #6)
and the configuration file is not included in the Linux kernel archive, then the Linux kernel source code will not be complete and corresponding.

源代码发行版归档文件通常只包含Linux内核的源代码，而不包含配置文件。根据设置的不同，Linux内核配置文件可能位于不同的位置。通常是位于Linux内核源代码的根目录中的“.config”文件（由“make config”或“make menuconfig”等Linux内核配置命令生成）。还有是位于“arch”子目录中。默认情况下，Linux内核源代码树包含多个配置文件，厂商倾向于将配置文件放在那里。例如，“arch/arm/configs/bcm2835_defconfig”包含特定的Broadcom主板的配置。使用哪个配置文件由构建脚本设置。第三种情况是将配置文件与构建脚本一起保存在Linux内核归档文件之外，并在构建过程之前先复制到Linux内核源代码树中。如果缺少构建系统（请参阅陷阱#6），并且配置文件也未包含在Linux内核归档文件中，则Linux内核源代码将不完整且不对应。

#### Multiple Linux kernel binaries, one configuration file
#### 多个Linux内核二进制文件，一个配置文件

Quite often there are multiple Linux kernel binaries included in a firmware, each with a different configuration. A common example is a rescue system (see Pitfall #4) which contains a minimal version of the Linux kernel, with the full system containing a Linux kernel instance with much more functionality. The source code archive, however, may have the configuration for only one of the two versions (or three, or even more).

一个固件中经常包含多个Linux内核二进制文件，每个都有不同的配置。一个常见的例子是恢复系统（参见陷阱#4），它包含一个Linux内核的最小版本，而完整的系统包含一个具有多个功能的 Linux内核实例。然而，源代码归档文件可能只有两个版本（或三个，甚至更多）中的一种配置。

#### Incorrect Linux kernel configuration file
#### 错误的Linux内核配置文件

It also happens that the Linux kernel configuration file may simply be not correct and that the appropriate Linux kernel binary cannot be compiled because functionality has been added or removed in the configuration.

Linux内核配置文件可能根本不正确，并且由于在配置文件中添加或删除了某些功能，因此无法编译适当的Linux内核二进制文件。

## Pitfall #9: Not Including the Version Number in Firmware and Source Code Archive Filenames
## 陷阱#9：不包括固件和源代码归档文件名中的版本号

One very common mistake is that firmwares and corresponding source code archives often do not have the version name (and the device name) in the filename, but use a generic name, such as "GPL.zip," for various devices and versions of source code. This makes it very easy to make mistakes and deliver the wrong files, which might lead to the impression that you are out of compliance.

一个常见的错误是固件和相应的源代码归档文件的文件名中没有包含版本信息（和设备名称），而是使用通用名称，例如“GPL.zip” ，用于各种设备和源代码版本。这就很容易犯错误并提交错误的文件，可能会给人留下不合规的印象。

The solution is to use, or demand that suppliers use, a naming convention that would include:

解决方案是使用或要求供应商使用命名约定，该约定包括：

-   Device name/model number (or multiple, if the files are identical)

    包含设备名称/型号（如果文件相同则包含多个）

-   Firmware revision number

    固件修订版本号

-   Revision level

    修订级别

For example: A device called AB-123 with firmware 1.2.3.4 would have a firmware filename "FW_AB-123_1.2.3.4.bin" and a source code archive filename "GPL_AB-123_1.2.3.4-0.bin."

例如：名为AB-123、固件为1.2.3.4的设备的固件文件名为“FW_AB-123_1.2.3.4.bin”，源代码归档文件名为“GPL_AB-123_1.2.3.4-0.bin”。

Using naming conventions like these will make it a lot easier to locate the right files, avoid making mistakes, and spot errors on download sites.

按照这样的命名约定，可以更容易地查找正确的文件，避免出错，并很容易在下载站点上发现错误。

[]{#_bookmark17 .anchor}CHAPTER 3:

# Scenarios for Releasing Software

## "'Did I do anything wrong today,' he said, 'or has the world always been like this and I've been too wrapped up in myself to notice?'"

DOUGLAS ADAMS

## Scenario #1: Software On A Device/Offline Distribution

Software is distributed onto a device, for example, flashed onto a device. There are two ways to comply with the license:

1. Deliver the complete and corresponding source code with the device, for example on a CD, DVD, or other medium. In some cases it might also be possible to include it on the device itself (given enough flash or storage space), but what is important is that the user should be able to retrieve the source code as well.

2. Add a written offer, valid for at least three years (for GPLv2; for GPLv3 this period might be longer, depending on how long the device is supported), to any third party for the source code.

The benefit of the first method is that there are no further obligations, as all the necessary information (license texts, copyright information, and so on) are included in the source code archive, as long as it is complete and corresponding. The drawback is that often the source is not complete and corresponding, and it is difficult to correct any mistakes discovered after creating the CD, DVD, or image. One situation that often arises is that just before shipping, a new firmware is flashed onto the device, but the CD/DVD distributed alongside it contains the GPL source code for a prior firmware revision. This happens because there was not enough time to create a new CD/DVD. Issues like this can potentially be addressed with a good Over- The-Air update process. [See Flowchart #4 on page 61](#_bookmark32) for one high-level example.

With the written offer it is easier to correct any mistakes later on, but there are a few drawbacks: It is necessary to keep an []{#_bookmark19 .anchor}infrastructure to fulfill the written offer (someone has to be responsible to create a source code CD/DVD and ship it) and there are also some legal gray areas pertaining to whether or not license statements and copyright statements should be delivered with the binary. Not everyone agrees on this, but there are increasingly more copyright holders who insist on having the copyright notices from the source code delivered with the binary. As previously stated, when delivering source code with the product this requirement has already been fulfilled, but when shipping a written offer, this is not the case. Extracting copyright notices from source code is awkward. FOSSology is one tool that can help, but additional checking may be required.

It might be best to choose shipping the source code with the device, with an extra optional written offer with information on how to ask for the source code. This way, it can be argued (if there is an error with the source code shipped) that the preferred way always has been the written offer and that the source code was mainly to provide license texts and copyright statements. If the source code is not complete and corresponding it might be incorrect, but not materially incorrect.

Please note that this scenario is independent of how firmware on a device is updated, which the next scenarios will dig into.

## Scenario #2: Manual Download From Website

When providing a firmware update on a website (independent of how the compliance for an initial device delivery is done --- see the previous scenario for that) there are often three possible choices to make:

1. []{#_bookmark20 .anchor}Provide the source code with the firmware update in a single archive. This would fulfill the requirements of GPLv2, section 3a.8

2. Include a written offer, as per GPLv2, section 3b.9

3. Provide a separate download next to the firmware, which would count as "equivalent access."

The same benefits and drawbacks apply as in Scenario #1, although it is much easier to correct mistakes (in choices 1 and 3) than when shipping a physical device, as it is easier to change the download.

Keep in mind that when offering source code online for download, there is always the possibility that a new website will be created later. If the web team is not aware that source code downloads were a requirement, a company may fall out of compliance after a new website is rolled out. It is important to note this download- requirement in the website change procedures and process.

## Scenario #3: Automatic/Over The Air Updates

For automatic updates and "over the air" (OTA) updates, shipping source code is almost impossible. This scenario for delivering binaries was likely not available when the GPLv2 was drafted in 1991. Automatic updates surgically update a few programs or files, and the size of the source code delivered to a device would dwarf the size of the executable (for example, the Linux kernel). Also, on many devices that can receive OTA updates it would be hard to access the downloaded source code or do anything with

8. See [**https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html**](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

9. Ibid.

[]{#_bookmark21 .anchor}it. Another problem is that there might simply not be enough space available on the device, and distribution of the source code might fail.

For OTA updates, the practical solution is to include a written offer. Please note that this is independent of how the device was originally shipped (source code, or written offer).

How and where copyright notices and license texts should be delivered can be a real challenge, especially if the device does not offer any way to interact with the user (display, web interface, and so on). If that is the case it might be best to point the user to a website and offer the information there instead of on the device (which would be futile as the user has no access to it) and point out that the license text is from 1991 and that OTA delivery models were not available then.

## Scenario #4: Field Engineer Applied Updates

In some cases (for example, industrial automation) it is common that a firmware update is applied by a field engineer of the manufacturer, or by a support firm. It is recommended to have the field engineer bring a CD/DVD with the source code and hand it over after the firmware update has been completed.


[]{#_bookmark22 .anchor}CHAPTER 4:

# Scenarios for Buying Software

## "Everything starts somewhere, although many physicists disagree."

TERRY PRATCHETT

## Context

When procuring devices or components from a third party to sell as part of your product, it is important to understand that the company offering the product in the market is responsible for the license compliance of the product. Often when a compliance problem arises, there is a conflict about who is responsible and who should bear the costs. This can lead to suppliers and downstream OEMs pointing fingers and blaming the other party. However, in the end, the company delivering the product to the market will likely be found responsible for ensuring compliance with the license.

It is also true that *fixing* compliance issues will be more expensive than *preventing* compliance issues. If the whole supply chain works together from the start to prevent these issues, costs for fixing issues can generally be kept low.

That being said, changing how current supply chains work is a multi-year effort. In this section, we will explore a few solutions that look into lowering risks for all parties in the supply chain.

## Scenario #1: Supply Chain Solutions For SoC Vendors

In most supply chains, the System on Chip (SoC) vendors have the biggest impact: They choose or build the software development kit and build a reference implementation that ODMs subsequently modify. If the SoC vendors get compliance right, then it is much easier for downstream recipients to comply with the license as well. Here are a few solutions that are worth considering:

1.  Pick a standard SDK instead of building your own SDK.

2.  Actively participate in the upstream software projects, and try to use as much "vanilla" software as possible.

3.  Have a third party check/audit license compliance.

#### Pick a Standard SDK

It is highly recommended that SoC vendors use a standard SDK instead of creating their own. From a license compliance perspective, the most compelling reason for this is that these standard SDKs often have mechanisms for easier license compliance built directly into the system. Plus, they have been reviewed by many people already and are supported by a much larger group of people than an in-house developed solution would be. Examples of standard SDKs are:

-   OpenWrt (and its offshoot LEDE)

-   Yocto

-   buildroot

-   Android

The additional benefit is that the so-called "scripts to control compilation and installation" are all available in the SDK.

#### Actively Participate in Upstream Projects

Many people are triggered to complain about license compliance status if they cannot make things work using standard software. Actively participating in upstream projects and supporting hardware in "vanilla" projects has two benefits:

1.  People will be less likely to complain, since they can simply work around any issues. Of course, this is not an excuse to not take any other measures for license compliance.

2.  People will be more inclined to send a "friendly ping" to point out any issues than to complain loudly. Of course, participating

[]{#_bookmark24 .anchor}engineers should know what to answer, and how to interact with communities at large, and be in sync with other departments and players (for example, the legal department).

Some organizations are more than willing to help SoC vendors to merge their code upstream and help them become effective open source citizens. For the Linux kernel, there is, for example, the Long Term Support Initiative (LTSI) run by The Linux Foundation. For vendors in the ARM ecosystem, there is also Linaro.

#### Third Party Audits

It might be useful to let a third party check for any issues in new SDKs before they are shipped downstream, and to incorporate any findings into the work process. The OpenChain Project (**[http://](http://openchainproject.org/) [openchainproject.org](http://openchainproject.org/)**) is a good start. Another hands-on, practical approach to consider is the OSADL License Compliance Audit ([**http://www.osadl.org**](http://www.osadl.org/)).

## Scenario #2: Supply Chain Solutions for ODMs

The Original Design Manufacturers (ODMs) are often in between the System on Chip (SoC) vendors and the companies that deliver products into the market. They are also the first point of contact for companies if something is wrong. As referenced earlier in this book, the technical choices made by the SoC vendor has one of the biggest impacts on any open source compliance situation. An ODM can help pick the right SoC vendor or make sure that any (possible) mistakes from SoC vendors do not impact them. Examples of actions that an ODM can take are:

1.  Work with SoC vendors that use standard SDKs or whose chipsets are well supported in standard SDKs (such as

[]{#_bookmark25 .anchor}OpenWrt) so the SDK you use is a standard SDK and not a SoC-specific SDK.

2.  Work with SoC vendors that use a SDK that has been certified by the OSADL license compliance audit or similar.

3.  Use contracts to push compliance damages to the SoC vendor.

4.  Actively participate in upstream projects.

5.  Let a third party audit a reference design.

## Scenario #3: Supply Chain Solutions for Others

When procuring devices, there are a few things that can be done to reduce compliance risk.

First and foremost, you can engage with other open source stakeholders who are addressing similar challenges. A great place to start is the OpenChain Project. OpenChain focuses on identifying common best practices in compliance programs that should be applied across a supply chain for efficient and effective compliance with open source licenses. It provides (free of charge) comprehensive specification, conformance, and curriculum material suitable for small, medium, and large enterprises. You can learn more at **[www.openchainproject.or](http://www.openchainproject.org/)g.**

Here are some direct measures you may wish to consider:

1.  Select only ODMs that use a solution from a chipset vendor that uses a standard SDK or have replaced the SoC SDK with a standard SDK.

2.  Explicitly ask for use of a certified/audited SDK.

3.  Use contracts to push damages upstream.

4.  Audit a sample before purchasing, or contract a third party to do this.

Doing an audit before a purchase is an interesting strategy to see how much risk a certain device will bring with it. This is, however, easier said than done. Very few ODMs are prepared to hand out samples; even when there are firm orders for tens of thousands of devices there are usually only a few samples (one or two) available for testing. Before a firm order has been placed, it will be very unlikely that an ODM will give out samples, fearing that the device will be taken to a cheaper competitor to be cloned.

One solution to this would be to let a third party do an audit and send a status report only to the purchaser, who can then use it to calculate its risk.

