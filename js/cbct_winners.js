$(document).ready(function () {

    const winnersDataTask2 = [
        {
            team: "Dice Med",
            profileLink: "#",
            metrics: {
                translation: { mean: "46.47", pm: "200.40" },
                rotation: { mean: "165.30", pm: "83.87" }
            },
            rank: 1,
            links: {
                code: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/code/task2/rank01-dicemed.zip",
                    icon: "icons/github.png",
                    name: "Code"
                },
                paper: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/TechnicalReport/task2/rank01-24_Semi_supervised_Teeth_Segme.pdf",
                    icon: "icons/openreview.png",
                    name: "Paper"
                }
            }
        },
        {
            team: "jichangkai",
            profileLink: "#",
            metrics: {
                translation: { mean: "161.08", pm: "12986.90" },
                rotation: { mean: "164.57", pm: "106.48" }
            },
            rank: 2,
            links: {
                code: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/code/task2/rank02-dicemed.zip",
                    icon: "icons/github.png",
                    name: "Code"
                },
                paper: {
                    url: "https://github.com/ricoleehduu/STS-Challenge-2025/blob/main/TechnicalReport/task2/rank02-20_Learning_based_CBCT_IOS_Reg.pdf",
                    icon: "icons/openreview.png",
                    name: "Paper"
                }
            }
        }
        // 后续名次可以按这个格式继续添加
    ];

    const $tbody = $('#winner-table-body');

    // 渲染指标值，同时包含 ±
    function renderMetric(metric) {
        if (!metric || !metric.mean) return "-";
        return `${metric.mean} (±${metric.pm})`;
    }

    winnersDataTask2.forEach((data, index) => {

        const isLast = index === winnersDataTask2.length - 1;
        const rowClass = isLast ? '' : 'winner-bottom-border';
        const rowStyle = isLast ? 'border-bottom: 2px solid black' : '';

        // 渲染 code / paper 链接
        const linksHtml = Object.entries(data.links).map(([key, link]) => {
            const type = key === 'code' ? 'github' : 'openreview';
            const liClass = link.disabled ? 'class="winner-disabled-link"' : '';
            const href = link.disabled ? 'javascript:void(0)' : link.url;

            return `
                <li ${liClass}>
                    [<a href="${href}" class="winner-${type}-link" target="_blank">
                        <img src="${link.icon}" class="winner-${type}-icon" alt="${link.name}">
                        ${link.name}
                    </a>]
                </li>
            `;
        }).join('');

        const tr = `
            <tr class="${rowClass}" style="${rowStyle}">
                <td class="winner-right-border">
                    <a href="${data.profileLink}" class="winner-user-link" target="_blank">
                        <img src="icons/user.png" class="winner-user-icon" alt="User">
                        ${data.team}
                    </a>
                </td>

                <td class="winner-right-border">${renderMetric(data.metrics.translation)}</td>
                <td class="winner-right-border">${renderMetric(data.metrics.rotation)}</td>
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
