$(document).ready(function() {
    const winnersData = [
        {
            team: "ChohoTech",
            profileLink: "https://www.codabench.org/profiles/organization/419/",
            metrics: {
                image: { dsc: "0.918", iou: "0.849", nsd: "0.956" },
                instance: { dsc: "0.845", iou: "0.765", nsd: "0.872", ia: "0.883" },
                algo: { rt: "13.291", gpu: "&nbsp;7341.120" }
            },
            rank: 1,
            links: {
                ppt: { url: "files/2d/01_ChohoTech.pdf", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "https://github.com/fenglian425/STS2D", icon: "icons/github.png", name: "Code" },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "camerart2024",
            profileLink: "https://www.codabench.org/profiles/user/camerart2024/",
            metrics: {
                image: { dsc: "0.869", iou: "0.771", nsd: "0.907" },
                instance: { dsc: "0.703", iou: "0.613", nsd: "0.740", ia: "0.734" },
                algo: { rt: "13.274", gpu: "14250.980" }
            },
            rank: 2,
            links: {
                ppt: { url: "files/2d/02_camerart2024.pdf", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "https://github.com/Liaaaar/2024-MICCAI-STS-2D", icon: "icons/github.png", name: "Code" },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "jichangkai",
            profileLink: "https://www.codabench.org/profiles/user/jichangkai/",
            metrics: {
                image: { dsc: "0.915", iou: "0.859", nsd: "0.944" },
                instance: { dsc: "0.801", iou: "0.734", nsd: "0.817", ia: "0.832" },
                algo: { rt: "55.897", gpu: "25461.260" }
            },
            rank: 3,
            links: {
                ppt: { url: "files/2d/03_jichangkai.pdf", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "dew123",
            profileLink: "https://www.codabench.org/profiles/user/dew123/",
            metrics: {
                image: { dsc: "0.844", iou: "0.736", nsd: "0.886" },
                instance: { dsc: "0.224", iou: "0.574", nsd: "0.699", ia: "0.658" },
                algo: { rt: "13.906", gpu: "15088.500" }
            },
            rank: 4,
            links: {
                ppt: { url: "files/2d/04_dew123.pptx", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "https://github.com/Dew026/DICL", icon: "icons/github.png", name: "Code" },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "junqiangmler",
            profileLink: "https://www.codabench.org/profiles/user/junqiangmler/",
            metrics: {
                image: { dsc: "0.826", iou: "0.713", nsd: "0.867" },
                instance: { dsc: "0.368", iou: "0.545", nsd: "0.678", ia: "0.552" },
                algo: { rt: "14.047", gpu: "12483.380" }
            },
            rank: 5,
            links: {
                ppt: { url: "#", icon: "icons/ppt.png", name: "PPT Share", disabled: true },
                code: { url: "https://github.com/junqiangchen/STS2024", icon: "icons/github.png", name: "Code" },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "isjinghao",
            profileLink: "https://www.codabench.org/profiles/user/isjinghao/",
            metrics: {
                image: { dsc: "0.826", iou: "0.730", nsd: "0.863" },
                instance: { dsc: "0.750", iou: "0.587", nsd: "0.676", ia: "0.698" },
                algo: { rt: "21.134", gpu: "27987.900" }
            },
            rank: 6,
            links: {
                ppt: { url: "files/2d/06_isjinghao.pdf", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "https://github.com/isbrycee/SemiT-SAM", icon: "icons/github.png", name: "Code" },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "lazyman",
            profileLink: "https://www.codabench.org/profiles/user/lazyman/",
            metrics: {
                image: { dsc: "0.597", iou: "0.430", nsd: "0.870" },
                instance: { dsc: "0.385", iou: "0.347", nsd: "0.725", ia: "0.086" },
                algo: { rt: "11.810", gpu: "13910.320" }
            },
            rank: 7,
            links: {
                ppt: { url: "files/2d/07_lazyman.pptx", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "caiyichen",
            profileLink: "https://www.codabench.org/profiles/user/caiyichen/",
            metrics: {
                image: { dsc: "0.820", iou: "0.703", nsd: "0.855" },
                instance: { dsc: "0.530", iou: "0.492", nsd: "0.566", ia: "0.574" },
                algo: { rt: "19.531", gpu: "26666.571" }
            },
            rank: 8,
            links: {
                ppt: { url: "#", icon: "icons/ppt.png", name: "PPT Share", disabled: true },
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "guo77777",
            profileLink: "https://www.codabench.org/profiles/user/guo77777/",
            metrics: {
                image: { dsc: "0.755", iou: "0.614", nsd: "0.803" },
                instance: { dsc: "0.324", iou: "0.285", nsd: "0.386", ia: "0.279" },
                algo: { rt: "18.421", gpu: "19694.260" }
            },
            rank: 9,
            links: {
                ppt: { url: "#", icon: "icons/ppt.png", name: "PPT Share", disabled: true },
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "cccc2024",
            profileLink: "https://www.codabench.org/profiles/organization/465/",
            metrics: {
                image: { dsc: "0.651", iou: "0.492", nsd: "0.679" },
                instance: { dsc: "0.319", iou: "0.192", nsd: "0.218", ia: "0.244" },
                algo: { rt: "13.462", gpu: "17730.480" }
            },
            rank: 10,
            links: {
                ppt: { url: "files/2d/10_cccc2024.pptx", icon: "icons/ppt.png", name: "PPT Share" },
                code: { url: "https://github.com/SUTAN-01/MICCAI-STS-2024", icon: "icons/github.png", name: "Code" },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        }
    ];

    const $tbody = $('#winner-table-body');

    winnersData.forEach((data, index) => {
        const isLast = index === winnersData.length - 1;
        const rowClass = isLast ? '' : 'winner-bottom-border';
        const rowStyle = isLast ? 'border-bottom: 2px solid black' : '';

        // Generate links HTML
        const linksHtml = Object.entries(data.links).map(([key, link]) => {
            let type = key;
            if (key === 'code') type = 'github';
            if (key === 'paper') type = 'openreview';

            const liClass = link.disabled ? 'class="winner-disabled-link"' : '';
            return `
                <li ${liClass}>[<a href="${link.url}" class="winner-${type}-link"><img src="${link.icon}" class="winner-${type}-icon" alt="${link.name}">${link.name}</a>]</li>
            `;
        }).join('');

        const tr = `
            <tr class="${rowClass}" style="${rowStyle}">
                <td class="winner-right-border">
                    <a href="${data.profileLink}" class="winner-user-link">
                        <img src="icons/user.png" class="winner-user-icon" alt="User">${data.team}
                    </a>
                </td>
                <td>${data.metrics.image.dsc}</td>
                <td>${data.metrics.image.iou}</td>
                <td class="winner-right-border">${data.metrics.image.nsd}</td>
                <td>${data.metrics.instance.dsc}</td>
                <td>${data.metrics.instance.iou}</td>
                <td>${data.metrics.instance.nsd}</td>
                <td class="winner-right-border">${data.metrics.instance.ia}</td>
                <td>${data.metrics.algo.rt}</td>
                <td class="winner-right-border">${data.metrics.algo.gpu}</td>
                <td class="winner-right-border">${data.rank}</td>
                <td>
                    <ol class="winner-table-links">
                        ${linksHtml}
                    </ol>
                </td>
            </tr>
        `;
        $tbody.append(tr);
    });
});
