import { 
    Button, Icon, Loader, Modal, Pagination, Search, Segment, Table, TableBody,TableCell,
    TableFooter, TableHeader, TableHeaderCell, TableRow 
} from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledButton = styled(Button)({});
export const StyledIcon = styled(Icon)({});
export const StyledFooter = styled(TableFooter)({});
export const StyledLoader = styled(Loader)({});
export const StyledRow = styled(TableRow)({});
export const StyledHeaderCell = styled(TableHeaderCell)({});
export const StyledCell = styled(TableCell)({});
export const StyledHeader = styled(TableHeader)({});
export const StyledBody = styled(TableBody)({});
export const StyledPagination = styled(Pagination)({});
export const StyledModal = styled(Modal)({});
export const StyledModalContent = styled(Modal.Content)({});
export const StyledModalActions = styled(Modal.Actions)({});
export const StyledSearch = styled(Search)({
    marginTop: 10,
});
export const StyledSegment = styled(Segment)({
    width: '100%',
});
export const StyledTable = styled(Table)({   
    maxWidth: '90%',
})
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color}
`;
