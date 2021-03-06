/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import API from 'AppData/api';
import { useIntl, FormattedMessage } from 'react-intl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import HelpBase from 'AppComponents/AdminPages/Addons/HelpBase';
import ListBase from 'AppComponents/AdminPages/Addons/ListBase';
import DescriptionIcon from '@material-ui/icons/Description';
import Link from '@material-ui/core/Link';
import Configurations from 'Config';
import Delete from 'AppComponents/MicrogatewayLabels/DeleteMGLabel';
import AddEdit from 'AppComponents/MicrogatewayLabels/AddEditMGLabel';
import EditIcon from '@material-ui/icons/Edit';

/**
 * API call to get microgateway labels
 * @returns {Promise}.
 */
function apiCall() {
    const restApi = new API();
    return restApi
        .getMicrogatewayLabelList()
        .then((result) => {
            return result.body.list;
        })
        .catch((error) => {
            throw error;
        });
}

/**
 * Render a list
 * @returns {JSX} Header AppBar components.
 */
export default function ListMGLabels() {
    const intl = useIntl();
    const columProps = [
        { name: 'id', options: { display: false } },
        {
            name: 'name',
            label: intl.formatMessage({
                id: 'AdminPages.Microgateways.table.header.label.name',
                defaultMessage: 'Label',
            }),
            options: {
                sort: true,
            },
        },
        {
            name: 'description',
            label: intl.formatMessage({
                id: 'AdminPages.Microgateways.table.header.label.description',
                defaultMessage: 'Description',
            }),
            options: {
                sort: false,
            },
        },
        {
            name: 'accessUrls',
            label: intl.formatMessage({
                id: 'AdminPages.Microgateways.table.header.hosts',
                defaultMessage: 'Gateway Host(s)',
            }),
            options: {
                sort: true,
                customBodyRender: (value) => {
                    return (
                        value.map((host) => (
                            <div>{host}</div>
                        ))
                    );
                },
            },
        },
    ];
    const addButtonProps = {
        triggerButtonText: intl.formatMessage({
            id: 'AdminPages.Microgateways.List.addButtonProps.triggerButtonText',
            defaultMessage: 'Add Microgateway Label',
        }),
        /* This title is what as the title of the popup dialog box */
        title: intl.formatMessage({
            id: 'AdminPages.Microgateways.List.addButtonProps.title',
            defaultMessage: 'Add Microgateway Label',
        }),
    };
    const searchProps = {
        searchPlaceholder: intl.formatMessage({
            id: 'AdminPages.Microgateways.List.search.default',
            defaultMessage: 'Search Microgateway by Name, Description or Host',
        }),
        active: true,
    };
    const pageProps = {
        help: (
            <HelpBase>
                <List component='nav' aria-label='main mailbox folders'>
                    <ListItem button>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <Link
                            target='_blank'
                            href={Configurations.app.docUrl
                        + 'learn/api-microgateway/grouping-apis-with-labels/#step-1-create-a-microgateway-label'}
                        >
                            <ListItemText primary={(
                                <FormattedMessage
                                    id='AdminPages.Microgateways.List.help.link.one'
                                    defaultMessage='Create a Microgateway label'
                                />
                            )}
                            />

                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <Link
                            target='_blank'
                            href={Configurations.app.docUrl
                        + 'learn/api-microgateway/grouping-apis-with-labels/'
                        + '#step-2-assign-the-microgateway-label-to-an-api'}
                        >
                            <ListItemText primary={(
                                <FormattedMessage
                                    id='AdminPages.Microgateways.List.help.link.two'
                                    defaultMessage='Assign the Microgateway label to an API'
                                />
                            )}
                            />

                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <Link
                            target='_blank'
                            href={Configurations.app.docUrl
                        + 'learn/api-microgateway/grouping-apis-with-labels/#step-3-view-the-microgateway-labels'}
                        >
                            <ListItemText primary={(
                                <FormattedMessage
                                    id='AdminPages.Microgateways.List.help.link.three'
                                    defaultMessage='View the Microgateway labels'
                                />
                            )}
                            />
                        </Link>
                    </ListItem>
                </List>
            </HelpBase>
        ),
        pageStyle: 'half',
        title: intl.formatMessage({
            id: 'AdminPages.Microgateways.List.title',
            defaultMessage: 'Microgateway Labels',
        }),
    };

    const emptyBoxProps = {
        content: (
            <Typography variant='body2' color='textSecondary' component='p'>
                <FormattedMessage
                    id='AdminPages.Microgateways.List.empty.content.microgateways'
                    defaultMessage={'It is possible to create a Microgateway distribution for a '
                    + 'group of APIs. In order to group APIs, a label needs to be created and '
                    + 'attached to the APIs that need to be in a single group.'}
                />
            </Typography>
        ),
        title: (
            <Typography gutterBottom variant='h5' component='h2'>
                <FormattedMessage
                    id='AdminPages.Microgateways.List.empty.title'
                    defaultMessage='Microgateway Labels'
                />
            </Typography>
        ),
    };
    return (
        <ListBase
            columProps={columProps}
            pageProps={pageProps}
            addButtonProps={addButtonProps}
            searchProps={searchProps}
            emptyBoxProps={emptyBoxProps}
            apiCall={apiCall}
            EditComponent={AddEdit}
            editComponentProps={{
                icon: <EditIcon />,
                title: 'Edit Microgateway Label',
            }}
            DeleteComponent={Delete}
        />
    );
}
