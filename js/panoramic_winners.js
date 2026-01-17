$(document).ready(function () {

    const winnersData = [
        {
            team: "zhiqin1998",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.9176", pm: "0.1970" },
                    iou: { mean: "0.8822", pm: "0.1924" },
                    nsd: { mean: "0.9487", pm: "0.2042" }
                },
                instance: {
                    dsc: { mean: "0.6668", pm: "0.1788" },
                    iou: { mean: "0.5513", pm: "0.1589" },
                    nsd: { mean: "0.8838", pm: "0.2058" },
                    ia:  { mean: "0.5778", pm: "0.2589" }
                }
            },
            rank: 1,
            links: {
                code: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/code/task1/rank01-Tan%20Zhi%20Qin.zip",
                    icon: "icons/github.png",
                    name: "Code"
                },
                paper: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/TechnicalReport/task1/rank01-21_U_Mamba2_SSL_for_Semi_Super.pdf",
                    icon: "icons/openreview.png",
                    name: "Paper"
                }
            }
        },
        {
            team: "jichangkai",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.9431", pm: "0.0183" },
                    iou: { mean: "0.8929", pm: "0.0314" },
                    nsd: { mean: "0.9934", pm: "0.0089" }
                },
                instance: {
                    dsc: { mean: "0.6268", pm: "0.0940" },
                    iou: { mean: "0.4994", pm: "0.0824" },
                    nsd: { mean: "0.8786", pm: "0.1114" },
                    ia:  { mean: "0.4748", pm: "0.1690" }
                }
            },
            rank: 2,
            links: {
                code: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/code/task1/rank02-changkaiJi.zip",
                    icon: "icons/github.png",
                    name: "Code"
                },
                paper: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/TechnicalReport/task1/rank02-19_Efficient_nnU_Net_for_Tooth.pdf",
                    icon: "icons/openreview.png",
                    name: "Paper"
                }
            }
        },
        {
            team: "DiceMed",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.8478", pm: "0.2397" },
                    iou: { mean: "0.7862", pm: "0.2498" },
                    nsd: { mean: "0.8530", pm: "0.2623" }
                },
                instance: {
                    dsc: { mean: "0.6019", pm: "0.1798" },
                    iou: { mean: "0.4815", pm: "0.1532" },
                    nsd: { mean: "0.8110", pm: "0.2326" },
                    ia:  { mean: "0.5099", pm: "0.2486" }
                }
            },
            rank: 3,
            links: {
                code: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/code/task1/rank03-dicemed.zip",
                    icon: "icons/github.png",
                    name: "Code"
                },
                paper: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/TechnicalReport/task1/rank03-23_nnUNet_for_Semi_supervised_.pdf",
                    icon: "icons/openreview.png",
                    name: "Paper"
                }
            }
        },
        {
            team: "cccc2024",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.4521", pm: "0.4823" },
                    iou: { mean: "0.4344", pm: "0.4636" },
                    nsd: { mean: "0.4704", pm: "0.5017" }
                },
                instance: {
                    dsc: { mean: "0.3052", pm: "0.3315" },
                    iou: { mean: "0.2477", pm: "0.2699" },
                    nsd: { mean: "0.4156", pm: "0.4502" },
                    ia:  { mean: "0.2509", pm: "0.2918" }
                }
            },
            rank: 4,
            links: {
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/TechnicalReport/task1/rank04-25_TCM_UNet_A_U_Net_with_Tri_A.pdf",
                    icon: "icons/openreview.png",
                    name: "Paper"
                }
            }
        },
        {
            team: "minh_dang",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.8105", pm: "0.0904" },
                    iou: { mean: "0.6902", pm: "0.1184" },
                    nsd: { mean: "0.8666", pm: "0.0915" }
                },
                instance: {
                    dsc: { mean: "0.1464", pm: "0.0273" },
                    iou: { mean: "0.1135", pm: "0.0268" },
                    nsd: { mean: "0.1964", pm: "0.0344" },
                    ia:  { mean: "0.1131", pm: "0.0691" }
                }
            },
            rank: 5,
            links: {
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "GUETIICI",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.8660", pm: "0.1160" },
                    iou: { mean: "0.7779", pm: "0.1425" },
                    nsd: { mean: "0.9352", pm: "0.1078" }
                },
                instance: {
                    dsc: { mean: "0.0043", pm: "0.0020" },
                    iou: { mean: "0.0022", pm: "0.0010" },
                    nsd: { mean: "0.0232", pm: "0.0096" },
                    ia:  { mean: "0.0000", pm: "0.0000" }
                }
            },
            rank: 6,
            links: {
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        },
        {
            team: "junqiangmler",
            profileLink: "#",
            metrics: {
                image: {
                    dsc: { mean: "0.3686", pm: "0.4548" },
                    iou: { mean: "0.3419", pm: "0.4220" },
                    nsd: { mean: "0.3981", pm: "0.4911" }
                },
                instance: {
                    dsc: { mean: "0.0899", pm: "0.1149" },
                    iou: { mean: "0.0766", pm: "0.0984" },
                    nsd: { mean: "0.1075", pm: "0.1370" },
                    ia:  { mean: "0.0875", pm: "0.1176" }
                }
            },
            rank: 7,
            links: {
                code: { url: "#", icon: "icons/github.png", name: "Code", disabled: true },
                paper: { url: "#", icon: "icons/openreview.png", name: "Paper", disabled: true }
            }
        }
    ];

    const $tbody = $('#winner-table-body');

    function renderMetric(metric) {
        if (!metric || !metric.mean) return "-";
        return `${metric.mean} (±${metric.pm})`;
    }

    winnersData.forEach((data, index) => {

        const isLast = index === winnersData.length - 1;
        const rowClass = isLast ? '' : 'winner-bottom-border';
        const rowStyle = isLast ? 'border-bottom: 2px solid black' : '';

        const linksHtml = Object.entries(data.links).map(([key, link]) => {
            const type = key === 'code' ? 'github' : 'openreview';
            const liClass = link.disabled ? 'class="winner-disabled-link"' : '';
            const href = link.disabled ? 'javascript:void(0)' : link.url;

            return `
                <li ${liClass}>
                    [<a href="${href}" class="winner-${type}-link">
                        <img src="${link.icon}" class="winner-${type}-icon" alt="${link.name}">
                        ${link.name}
                    </a>]
                </li>
            `;
        }).join('');

        const tr = `
            <tr class="${rowClass}" style="${rowStyle}">
                <td class="winner-right-border">
                    <a href="${data.profileLink}" class="winner-user-link">
                        <img src="icons/user.png" class="winner-user-icon" alt="User">
                        ${data.team}
                    </a>
                </td>

                <td>${renderMetric(data.metrics.image.dsc)}</td>
                <td>${renderMetric(data.metrics.image.iou)}</td>
                <td class="winner-right-border">${renderMetric(data.metrics.image.nsd)}</td>

                <td>${renderMetric(data.metrics.instance.dsc)}</td>
                <td>${renderMetric(data.metrics.instance.iou)}</td>
                <td>${renderMetric(data.metrics.instance.nsd)}</td>
                <td class="winner-right-border">${renderMetric(data.metrics.instance.ia)}</td>

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
