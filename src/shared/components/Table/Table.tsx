import styled from "@emotion/styled";
import useMyTheme from "@styles/useMyTheme";
import Typography from "@shared/components/Typography";
import { ReactComponent as Logo } from "@assets/logo.svg"
import { SHARED_LABELS } from "@shared/constants/labels";

export type ColumnProps = {
    header: string,
    align?: 'left' | 'center' | 'right',
    dataKey: string,
    cellRender?: (data: any) => React.ReactNode
};

type TableProps = {
    columns: ColumnProps[],
    data?: object[],
    emptyMessage?: string
}

const Table = ({ columns, data = [], emptyMessage = SHARED_LABELS.emptyList }: TableProps) => {
    const theme = useMyTheme();

    const StyledTable = styled.table({
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        color: theme.colors.primaryLight
    });

    const StyledTr = styled.tr({
        ':hover': {
            background: theme.table.tr.hover.background,
            color: theme.table.tr.hover.color
        }
    });

    const StyledTh = styled.th<Partial<ColumnProps>>(({ align = 'left' }) => ({
        textAlign: align,
        padding: 10,
        borderBottom: `1px dashed ${theme.table.borderColor}`
    }));

    const StyledTd = styled.td<Partial<ColumnProps>>(({ align = 'left' }) => ({
        textAlign: align,
        padding: 10,
        borderBottom: `1px dashed ${theme.table.borderColor}`
    }));

    const StyledEmptyContainer = styled.div({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '30px 0'
    })

    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <StyledTh key={index} align={column.align}>
                                <Typography font="primary" sizeRem={1.5}>
                                    {column.header}
                                </Typography>
                            </StyledTh>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, indexRow) => (
                        <StyledTr key={indexRow}>
                            {columns.map((column, indexColumn) => (
                                <StyledTd key={indexColumn} align={column.align}>
                                    {
                                        column.cellRender
                                            ? column.cellRender(row[column.dataKey])
                                            : row[column.dataKey]
                                    }
                                </StyledTd>
                            ))}
                        </StyledTr>
                    ))}
                </tbody>
            </StyledTable>
            {data.length === 0 && (
                <StyledEmptyContainer>
                    <Logo width="100" height="auto" viewBox="0 0 280 280" fill={theme.colors.secondary} />
                    <Typography variant="subtitle">
                        {emptyMessage}
                    </Typography>
                </StyledEmptyContainer>
            )}
        </>
    );
}

export default Table;
