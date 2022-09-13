import axios from 'axios';
import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView, View } from 'react-native';

const optionsPerPage = [8, 9, 10];

const ListaMedi = () => {
    const [api, setApi] = React.useState([])
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    React.useEffect(() => {
        const consultarApi = async () => {
            try {
                const url = 'http://192.168.3.43:3000/Medicamentos'
                const resultado = await axios.get(url)
                setApi(resultado.data)
                console.log(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        consultarApi()
    }, [])
    return (
        <View >
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Medicamento</DataTable.Title>
                    <DataTable.Title numeric>Stock</DataTable.Title>
                    <DataTable.Title numeric>Hora</DataTable.Title>
                </DataTable.Header>
                {api.map((unu, id) => (
                    <DataTable.Row >
                        <DataTable.Cell key={id}>{unu.med}</DataTable.Cell>
                        <DataTable.Cell numeric>{unu.stock}</DataTable.Cell>
                        <DataTable.Cell numeric>{unu.alarma}</DataTable.Cell>
                    </DataTable.Row>
                ))}
                <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={(page) => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />
            </DataTable>
        </View>

    );
}

export default ListaMedi;